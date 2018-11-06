import * as compareVersions from "compare-versions"

/**
 * GET 参数获取
 * @param name 参数名称
 */
export const getParameterByName = (function () {
  let urlParamMap = {}
  let interrogationIndex = location.href.indexOf("?") + 1
  let str = interrogationIndex === 0 ? "" : location.href.slice(interrogationIndex)
  if (str) {
    let arr = str.split(/&|%26/)
    arr.forEach(item => {
      let arr = item.split(/=|%3D/)
      let key = arr[0]
      let val = arr[1]
      urlParamMap[key] = val
    })
  }
  return function (name) {
    return urlParamMap.hasOwnProperty(name) ? urlParamMap[name] : null
  }
})()

/**
 * 是否需要下载补丁（根据服务端的补丁版本和本地客户端的补丁版本比较）
 */
export function shouldPatch(server: AppLauncher.Init.ServerResponseData, client: AppLauncher.Init.NativeResponse) {
  return compareVersions((client.patchVersion || '0'), (server.publics.patchVersion || '0')) === -1
}

/**
 * 检查插件包版本是否可用
 * @param server 
 * @param client 
 */
export function shouldPlugin(server: AppLauncher.Init.ServerResponseData, client: AppLauncher.Init.NativeResponse) {
  return compareVersions((client.plgVersion || '0'), (server.publics.currentPlugVersion || '0')) === -1
}

/** 开始安装启动器 */
export function installPlugin() {
  let param = {
    localAddr: window.localPluginAddress,
    packageName: window.currentPlugPackageName,
    plgVersion: window.currentPlugVersion
  }
  console.info('开始安装启动器， param：' + param)
  window.overwrite.plinst(param)
}

/**
 * 延迟执行
 * @param ms 毫秒 millisecond
 */
export function Delay(ms = 1) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve()
    }, ms * 500)
  })
}

export function DateFormat(pattern = "yyyy-MM-dd hh:mm:ss"): string {
  let date = new Date
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  }
  if (/(y+)/.test(pattern))
    pattern = pattern.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    )
  for (let k in o)
    if (new RegExp("(" + k + ")").test(pattern))
      pattern = pattern.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      )
  return pattern
}