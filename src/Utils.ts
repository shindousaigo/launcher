
const urlParamMap = {}

/**
 * GET 参数获取
 * @param name 参数名称
 */
export const getParameterByName = (function () {
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

export const setUrlParamMap = function (key, val) {
  urlParamMap[key] = val
}
