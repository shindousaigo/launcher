/// <reference path="./index.d.ts" />

import { App as AppInstance } from "index";
import I18n from "./i18n";

var getParameterByNameMap = null;
var App: AppInstance

function getParameterByName(name) {
  if (!getParameterByNameMap) {
    getParameterByNameMap = {};
    var interrogationIndex = location.href.indexOf("?") + 1;
    var str =
      interrogationIndex === 0 ? "" : location.href.slice(interrogationIndex);
    if (str) {
      var arr = str.split(/&|%26/);
      arr.forEach(item => {
        var arr = item.split(/=|%3D/);
        var key = arr[0];
        var val = arr[1];
        getParameterByNameMap[key] = val;
      });
    }
  }
  var params: Object = getParameterByNameMap;
  return params.hasOwnProperty(name) ? params[name] : null;
}

class Http {
  static _ins: Http;
  static get instance(): Http {
    return this._ins || new Http();
  }
  constructor() {
    Http._ins = this;
  }

  private serverAddress = SERVER;

  private request(param: any): Promise<any> {
    var data;
    if (param.data) {
      data = Object.keys(param.data)
        .map(key => {
          return `${key}=${param.data[key]}`;
        })
        .join("&");
    }

    var xhr = new XMLHttpRequest(); //创建ajax对象
    console.log(param.method, this.serverAddress + param.route, data);
    xhr.open(param.method, this.serverAddress + param.route);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);

    return new Promise((resolve, reject) => {
      xhr.onreadystatechange = function() {
        //xhr.readyState  //浏览器和服务器，进行到哪一步了。
        //0->（未初始化）：还没有调用 open() 方法。
        //1->（载入）：已调用 send() 方法，正在发送请求。
        //2->载入完成）：send() 方法完成，已收到全部响应内容。
        //3->（解析）：正在解析响应内容。
        //4->（完成）：响应内容解析完成，可以在客户端调用。
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
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
  polyfillUrl = "https://polyfill.io/v2/polyfill.min.js";
  features = [];
  setup() {
    this.polyfills.forEach(feature => {
      if (!(feature in window)) {
        this.features.push(feature);
      }
    });
    console.log("features", this.features);
    if (this.features.length) {
      var s = document.createElement("script");
      s.src = `${this.polyfillUrl}?features=${this.features.join(
        ","
      )}&flags=gated,always&rum=0&callback=Main`;
      s.async = true;
      document.head.appendChild(s);
    } else {
      window.Main();
    }
  }
}

Date.prototype.format = function(fmt) {
  var o = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    S: this.getMilliseconds()
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};

window.Main = async function() {
  var startKey = getParameterByName("startKey");
  var startId = getParameterByName("startId");

  startKey = startKey || '6630bba2bcf84a8eb62b602614cbb661'
  startId = startId || 9000

  if (!window.JsToNative) await import('./adapter');

  {
    window.overwrite = {} as any
    window.overwrite.getDeviceMsg = function () {
      var msg = window.JsToNative.getDeviceMsg()
      console.log('getDeviceMsg', msg)
      return JSON.parse(msg)
    }
    window.overwrite.startLoad = function (param) {
      console.log('startLoad', param)
      window.JsToNative.startLoad(JSON.stringify(param))
    }
    window.overwrite.checkVaStatus = function (param) {
      console.log('checkVaStatus', param)
      return JSON.parse(window.JsToNative.checkVaStatus(JSON.stringify(param)))
    }
    window.overwrite.plinst = function (param) {
      console.log('plinst', param)
      console.log('....', window.JsToNative.replinst, window.JsToNative)
      window.JsToNative.plinst(JSON.stringify(param))
    }
    window.overwrite.replinst = function (param) {
      console.log('replinst', param)
      window.JsToNative.replinst(JSON.stringify(param))
    }
    window.overwrite.lachgm = function (param) {
      console.log('lachgm', param)
      window.JsToNative.lachgm(JSON.stringify(param))
    }


    window.NativeToJs = {
      catchException: function (code) {
        if (code == '1001') {
          var progress = App.refs.progress
          progress.state.is1001 = true
          progress.setState(progress.state)
        }
        if (code == '1002') {
          var catchException = App.refs.catchException
          catchException.state.open = true
          catchException.state.msg = I18n[catchException.props.responses.nativeInitData.language].mg_net_wrong
          catchException.setState(catchException.state)
          App.state.startDownload()
        }

        if (code == '1003') { // 有补丁需要下载安装更新

        }

        if (code == '1004') { // 无补丁需要更新（直接安装插件包）
          // 开始安装插件包
          window.overwrite.plinst({
            localAddr: window.currentPlugDownloadUrl,
            packageName: window.currentPlugPackageName,
            plgVersion: window.currentPlugVersion
          })
        }
        console.info('msg: ' + code)
      },
      backPressed: function () {
        var isOpen = App.refs.exitApp.state.open
        if (!isOpen) {
          App.refs.exitApp.setState({
            open: true
          })
        }
      },
      downloadUpdate: function (msg) {
        if (msg) {
          var state = {
            downloaded: Math.floor(msg.soFarBytes / 1024 / 1024) + 'M',
            total: Math.floor(msg.totalBytes / 1024 / 1024) + 'M',
            speed: !msg.speed ? 0 : msg.speed < 1024 ? msg.speed + 'Kb/s' : (msg.speed / 1024).toFixed(1) + 'M/s',
            rate: (!msg.soFarBytes || !msg.totalBytes) ? 0 : Math.floor(msg.soFarBytes / msg.totalBytes * 100)
          }
          if (state.rate >= 100) {
            window.currentPlugDownloadUrl = msg.localFilePath
            window.JsToNative.checkPatch(
              JSON.stringify({
                localAddr: msg.localFilePath
              })
            )
            App.refs.progress.state.complete = true
            App.refs.progress.state.speed = 0
            App.refs.progress.state.downloaded = 0
            App.refs.progress.state.total = 0
            App.refs.progress.state.rate = 0
            App.refs.progress.state.udder = I18n[App.props.responses.nativeInitData.language].mg_tip_first_launch
          }
          App.refs.progress.setState(state)
        }
      }
    }
    
  }


  var nativeInitData: AppLauncher.Init.NativeResponse = window.overwrite.getDeviceMsg()
  var serverInitData: AppLauncher.Init.ServerResponse
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
      sign: md5(
        startId + nativeInitData.model + nativeInitData.network + startKey
      )
    };
    Http.instance
      .post({
        route: "/pocketgames/start/init",
        data
      })
      .then((res: AppLauncher.Init.ServerResponse) => {
        // 初始化完成
        if (res.code === 200) {
          serverInitData = res;
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
    import("./index").then(module => {
      var setup = module.default;
      resolve(setup);
    });
  });
  Promise.all([promise1, promise2])
    .then(
      ([{ serverInitData, nativeInitData }, setup]: [
        {
          serverInitData: AppLauncher.Init.ServerResponse;
          nativeInitData: AppLauncher.Init.NativeResponse;
        },
        Function
      ]) => {
        App = setup({
          serverInitData,
          nativeInitData
        });
      }
    )
    .catch(err => {
      window.NativeToJs.catchException(err);
    });
};

new Polyfill();
