import AppInstance from "src/components/Version/index";
import { getParameterByName } from "./Utils";
import { Refs, Version } from "./const";
import Progess from "Src/components/Progress";
import Progress from "Src/components/Progress";

var App: AppInstance;
const version = getParameterByName("version") || VERSION;

class Http {
  static _ins: Http;
  static get instance(): Http {
    return this._ins || new Http();
  }
  constructor() {
    Http._ins = this;
  }
  private serverAddress = location.host === "sdk-de.pocketgamesol.com" ? "http://start-de-sdk.pocketgamesol.com" : SERVER;
  private request(param: any): Promise<any> {
    var data;
    if (param.data) {
      data = Object.keys(param.data)
        .map(key => {
          return `${key}=${param.data[key]}`;
        })
        .join("&");
    }
    var xhr = new XMLHttpRequest();
    xhr.open(param.method, this.serverAddress + param.route);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);
    return new Promise((resolve, reject) => {
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const json = JSON.parse(xhr.responseText);
            console.info(`${param.method}, ${this.serverAddress + param.route}, ${data}`, json);
            resolve(json);
          } else {
            reject("server res err");
          }
        }
      };
    });
  }

  public post(param: any): Promise<any> {
    return this.request(Object.assign({ method: "POST" }, param));
  }

  public get(param?: any) {
    return this.request(Object.assign({ method: "GET" }, param || {}));
  }
}

class Polyfill {
  constructor() {
    this.setup();
  }
  polyfills = ["Promise", "Set", "Map", "Object.assign"];
  polyfillUrl = "https://polyfill.io/v3/polyfill.min.js";
  features = [];
  setup() {
    this.polyfills.forEach(feature => {
      if (!(feature in window)) {
        this.features.push(feature);
      }
    });
    console.info("features: ", this.features);
    if (this.features.length) {
      var s = document.createElement("script");
      s.src = `${this.polyfillUrl}?features=${this.features.join(",")}&flags=gated,always&rum=0`; // &callback=Main
      s.async = true;
      document.head.appendChild(s);
      s.onload = function () {
        window.Main();
      };
    } else {
      window.Main();
    }
  }
}

Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    S: this.getMilliseconds()
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o) if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
  return fmt;
};

window.Main = async function () {
  var startKey = getParameterByName("startKey") || "d402879e28054b46ba29bbd7c2a6bb17";
  var startId = getParameterByName("startId") || 9997;
  var adapter;
  if (!window.JsToNative) adapter = await import("./adapter");

  {
    window.overwrite = {} as any;
    window.overwrite.getDeviceMsg = function () {
      let msg = window.JsToNative.getDeviceMsg();
      console.info("Js_To_Native::getDeviceMsg", msg);
      return JSON.parse(msg);
    };
    window.overwrite.startLoad = function (param) {
      console.info("Js_To_Native::startLoad", param);
      window.JsToNative.startLoad(JSON.stringify(param));
    };
    window.overwrite.checkVaStatus = function (param) {
      console.info("Js_To_Native::checkVaStatus", param);
      return JSON.parse(window.JsToNative.checkVaStatus(JSON.stringify(param)));
    };
    window.overwrite.plinst = function (param) {
      console.info("Js_To_Native::plinst", param);
      window.JsToNative.plinst(JSON.stringify(param));
    };
    window.overwrite.replinst = function (param) {
      console.info("Js_To_Native::replinst", param);
      window.JsToNative.replinst(JSON.stringify(param));
    };
    window.overwrite.lachgm = function (param) {
      console.info("Js_To_Native::lachgm", param);
      window.JsToNative.lachgm(JSON.stringify(param));
    };
    window.overwrite.loadPatch = function (param) {
      console.info("Js_To_Native::loadPatch", param);
      window.JsToNative.loadPatch(JSON.stringify(param));
    };
    window.overwrite.addPkgVisible = function (param) {
      if (window.JsToNative.addPkgVisible) {
        console.info("Js_To_Native::addPkgVisible", param);
        window.JsToNative.addPkgVisible && window.JsToNative.addPkgVisible(JSON.stringify(param));
      }
    };

    let pluginInstall = function () {
      // 插件包安装
      window.overwrite.plinst({
        localAddr: window.currentPlugDownloadUrl,
        packageName: window.currentPlugPackageName,
        plgVersion: window.currentPlugVersion
      });
    };

    window.NativeToJs = {
      catchException: function (code) {
        if (code == "1001") {
          App.refs[Refs.Progress].state.is1001 = true;
          App.refs[Refs.Progress].setState(App.refs[Refs.Progress].state);
        } else if (code == "1002") {
          var catchException = App.refs.catchException;
          catchException.state.open = true;
          catchException.state.type = code;
          catchException.setState(catchException.state);
          App.state.startDownload();
        } else if (code == "1011") {
          // 补丁安装成功
          let Progress = App.refs[Refs.Progress] as Progess;
          if (Progress) {
            Progress.makeProgressComplete();
          }
        } else if (code == "1010" || code == "1012" || code == "1013") {
          var exe = function () {
            let Progress;
            if (App && (Progress = App.refs[Refs.Progress] as Progress)) {
              clearInterval(Progress.interval);
              Progress.state.rate = 0;
              Progress.state.complete = false;
              Progress.state.is1001 = true;
              Progress.setState(Progress.state);
              App.state.components.tip = false;
              App.setState(App.state);
            } else {
              requestAnimationFrame(function () {
                exe();
              });
            }
          };
          exe();
        } else if (code == "google_play") {
          var catchException = App.refs.catchException;
          catchException.state.open = true;
          catchException.state.clickFn = function () {
            window.open(App.props.responses.serverInitData.data.downloadUrl);
            setTimeout(function () {
              window.JsToNative.exitApp();
            }, 500);
          };
          catchException.state.type = code;
          catchException.setState(catchException.state);
        } else if (code == "1003") {
          // 有补丁需要下载安装更新
        } else if (code == "1004") {
          // 无补丁需要更新（直接安装插件包）
          pluginInstall();
        } else if (code == "1005") {
          // sp1 安装插件包
          let Progress = App.refs[Refs.Progress] as Progess;
          if (Progress) {
            Progress.state.complete = true;
            Progress.makeProgressComplete();
          }
          App.state.components.tip = true;
          App.setState(App.state);
          pluginInstall();
        } else if (code == "1006") {
          window.overwrite.lachgm({
            packageName: this.props.responses.serverInitData.data.publics.currentPlugPackageName
          })
        } else if (code == "1007") { // currentStartDownPage
          let catchException = this.refs.catchException
          catchException.state.open = true
          catchException.state.clickFn = () => {
            window.open(
              this.props.responses.serverInitData.data.publics.currentStartDownPage
            )
            setTimeout(function () {
              window.JsToNative.exitApp()
            }, 500)
          }
          catchException.state.type = 'isX86'
          catchException.setState(catchException.state)
        }


        console.info("Msg: " + code);
      },
      backPressed: function () {
        var isOpen = App.refs.exitApp.state.open;
        if (!isOpen) {
          App.refs.exitApp.setState({
            open: true
          });
        }
      }
    } as any;
  }

  var nativeInitData: AppLauncher.Init.NativeResponse = window.overwrite.getDeviceMsg();
  var serverInitData: AppLauncher.Init.ServerResponse;
  var promise1: Promise<{
    nativeInitData;
    serverInitData;
  }> = new Promise((resolve, reject) => {
    var data: AppLauncher.Init.ServerRequest = {
      startId,
      clientTime: new Date().format("yyyy-MM-dd hh:mm:ss"),
      version: nativeInitData.version,
      network: nativeInitData.network,
      model: nativeInitData.model,
      operatorOs: nativeInitData.operatorOs,
      deviceNo: nativeInitData.deviceNo,
      device: nativeInitData.device,
      sign: md5(startId + nativeInitData.model + nativeInitData.network + startKey)
    };
    Http.instance
      .post({
        route: "/pocketgames/start/init",
        data
      })
      .then((res: AppLauncher.Init.ServerResponse) => {
        // 初始化完成
        if (res.code === 200) {
          serverInitData = adapter ? adapter.serverInitData(res) : res;

          const addImage = function (src) {
            let div = document.getElementById("app-background") as HTMLDivElement;
            let img = document.createElement("img") as HTMLImageElement;
            img.style.top = "0";
            img.style.left = "0";
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.position = "fixed";
            img.src = src;
            div.appendChild(img);
          };
          // 打飞机的游戏
          const planeGame = () => {
            document.body.style.backgroundColor = "#000000";
            import("assets/games/dafeiji");
          };

          if (serverInitData.data.isCheck) {
            if (version !== Version.Dev) {
              const type = +serverInitData.data.bgType || 0;
              switch (type) {
                case 1:
                  addImage(serverInitData.data.currentTrialPhoto);
                  break;
                default:
                  planeGame();
              }
            }
            // addImage(serverInitData.data.currentTrialPhoto);
          } else {
            // if (version === Version.Sp0) {
            window.overwrite.addPkgVisible({
              plgPkgName: serverInitData.data.publics.plgPkgName
            });
            // }
            let images = serverInitData.data.publics.currentPhoto.split(",");
            if (nativeInitData.isX86 || images.length === 1) {
              addImage(images[0]);
            } else {
              import("src/components/slides/slides").then(module => {
                const Slides = module.default;
                new Slides({ images });
              });
            }
          }
          resolve({
            nativeInitData,
            serverInitData
          });
        } else {
          reject(res.error_msg);
        }
      });
  });
  var promise2: Promise<Function> = new Promise(resolve => {
    var imports = {
      [Version.Dev]: import("src/components/Version/Dev"),

      [Version.Sp0]: import("src/components/Version/Sp0"),
      [Version.Sp1]: import("src/components/Version/Sp1"),

      [Version.Tk0]: import("src/components/Version/Tk0"),
      
      // [Version.Rb0]: import("src/components/Version/Rb0"),

      [Version.Ob0]: import("src/components/Version/Ob0"),

      [Version.Va0]: import("src/components/Version/Va0")
    };
    imports[version].then(module => {
      var setup = module.default;
      resolve(setup);
    });
  });
  Promise.all([promise1, promise2])
    .then(([{ serverInitData, nativeInitData }, setup]: [{ serverInitData: AppLauncher.Init.ServerResponse; nativeInitData: AppLauncher.Init.NativeResponse }, Function]) => {
      App = setup({
        serverInitData,
        nativeInitData
      });
    })
    .catch(err => {
      window.NativeToJs.catchException(err);
    });
};

new Polyfill();
