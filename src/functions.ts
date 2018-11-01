import * as compareVersions from "compare-versions"

/**
 * GET 参数获取
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
export const shouldPatch = function (server, client) {

}