import { App as AppInstance } from "./index"
import I18n from "./modules/i18n"
import { getParameterByName, DateFormat, installPlugin } from "./fns"
import Http from "./modules/http"
import Polyfill from "./modules/polyfill"

let App: AppInstance

class Main {

  startKey = getParameterByName("startKey") || '6630bba2bcf84a8eb62b602614cbb661'
  startId = getParameterByName("startId") || 9000

  constructor() {
    window.Main = () => {
      this.init()
    }
    new Polyfill
    console.log('2')
  }

  async init() {
    console.log('3')
    { // 非原生应用环境 加载适配代码
      if (!window.JsToNative) await import('./adapter')
    }

    { // 
      window.overwrite = {} as any
      window.overwrite.getDeviceMsg = function () {
        let msg = window.JsToNative.getDeviceMsg()
        console.info('Js_To_Native::getDeviceMsg', msg)
        return JSON.parse(msg)
      }
      window.overwrite.startLoad = function (param) {
        console.info('Js_To_Native::startLoad', param)
        window.JsToNative.startLoad(JSON.stringify(param))
      }
      window.overwrite.checkVaStatus = function (param) {
        console.info('Js_To_Native::checkVaStatus', param)
        return JSON.parse(window.JsToNative.checkVaStatus(JSON.stringify(param)))
      }
      window.overwrite.plinst = function (param) {
        console.info('Js_To_Native::plinst', param)
        window.JsToNative.plinst(JSON.stringify(param))
      }
      window.overwrite.replinst = function (param) {
        console.info('Js_To_Native::replinst', param)
        window.JsToNative.replinst(JSON.stringify(param))
      }
      window.overwrite.lachgm = function (param) {
        console.info('Js_To_Native::lachgm', param)
        window.JsToNative.lachgm(JSON.stringify(param))
      }
      window.overwrite.loadPatch = function (param) {
        console.info('Js_To_Native::loadPatch', param)
        window.JsToNative.loadPatch(JSON.stringify(param))
      }

      window.NativeToJs = {
        catchException: function (code) {
          switch (code) {
            case '1001':
              let progress = App.refs.progress
              progress.state.is1001 = true
              progress.setState(progress.state)
              break
            case '1002':
              let catchException = App.refs.catchException
              catchException.state.open = true
              catchException.state.msg = I18n[catchException.props.responses.nativeInitData.language].mg_net_wrong
              catchException.setState(catchException.state)
              App.state.startDownload()
              break
            case '1003': // 有补丁需要下载安装更新
              break
            case '1004': // 无补丁需要更新（直接安装插件包）
              installPlugin()
              break
          }
          console.info('msg: ' + code)
        },
        backPressed: function () {
          let isOpen = App.refs.exitApp.state.open
          if (!isOpen) {
            App.refs.exitApp.setState({
              open: true
            })
          }
        },
        downloadUpdate: function (msg) {
          if (msg) {
            let state = {
              downloaded: Math.floor(msg.soFarBytes / 1024 / 1024) + 'M',
              total: Math.floor(msg.totalBytes / 1024 / 1024) + 'M',
              speed: !msg.speed ? 0 : msg.speed < 1024 ? msg.speed + 'Kb/s' : (msg.speed / 1024).toFixed(1) + 'M/s',
              rate: (!msg.soFarBytes || !msg.totalBytes) ? 0 : Math.floor(msg.soFarBytes / msg.totalBytes * 100)
            }
            if (state.rate >= 100) {
              { // download completed
                if (window.currentPlugDownloadUrl) { // 插件包下载完成
                  window.currentPlugDownloadUrl = undefined
                  window.localPluginAddress = msg.localFilePath
                  window.currentPlugDownloadResolve()
                }
                else if (window.currentPatchDownloadUrl) {
                  window.currentPatchDownloadUrl = undefined
                  window.localPatchAddress = msg.localFilePath
                  window.currentStartDownloadResolve()
                }
                else if (window.currentStartDownloadUrl) { // 启动器下载完成
                  window.overwrite.replinst({
                    localAddr: msg.localFilePath
                  })
                }


              }

              setTimeout(function () {
                if (!window.currentPatchDownloadUrl) {
                  App.refs.progress.state.complete = true
                  App.refs.progress.state.speed = 0
                  App.refs.progress.state.downloaded = 0
                  App.refs.progress.state.total = 0
                  App.refs.progress.state.rate = 0
                  App.refs.progress.state.udder = I18n[App.props.responses.nativeInitData.language].mg_tip_first_launch
                  App.refs.progress.setState(state)
                }
              })

            }
            App.refs.progress.setState(state)
          }
        }
      }

    }

    let nativeInitData: AppLauncher.Init.NativeResponse = window.overwrite.getDeviceMsg()
    let serverInitData: AppLauncher.Init.ServerResponse

    console.log('4')
    let promise1: Promise<{
      nativeInitData
      serverInitData
    }> = new Promise((resolve, reject) => {
      let data: AppLauncher.Init.ServerRequest = {
        startId: this.startId,
        clientTime: DateFormat(),
        version: nativeInitData.version,
        network: nativeInitData.network,
        model: nativeInitData.model,
        operatorOs: nativeInitData.operatorOs,
        deviceNo: nativeInitData.deviceNo,
        device: nativeInitData.device,
        sign: md5(this.startId + nativeInitData.model + nativeInitData.network + this.startKey)
      }
      Http.instance.post({
        route: "/pocketgames/start/init",
        data
      }).then((res: AppLauncher.Init.ServerResponse) => {
        // 初始化完成
        if (res.code === 200) {
          console.log('5')
          serverInitData = res
          let img = document.getElementById('app-background') as HTMLImageElement
          if (serverInitData.data.isCheck) {
            img.src = serverInitData.data.currentTrialPhoto
          } else {
            img.src = serverInitData.data.publics.currentPhoto
          }
          resolve({
            nativeInitData,
            serverInitData
          })
        } else {
          reject(res.error_msg)
        }
      })
    })
    let promise2: Promise<Function> = new Promise(resolve => {
      import("./index").then(module => {
        let setup = module.default
        resolve(setup)
      })
    })
    Promise.all([promise1, promise2])
      .then(
        ([{ serverInitData, nativeInitData }, setup]: [
          {
            serverInitData: AppLauncher.Init.ServerResponse
            nativeInitData: AppLauncher.Init.NativeResponse
          },
          Function
        ]) => {
          App = setup({
            serverInitData,
            nativeInitData
          })
        }
      )
      .catch(err => {
        window.NativeToJs.catchException(err)
      })
  }
}



console.log('1')
new Main
