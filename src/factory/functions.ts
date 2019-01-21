export function Delay(times?) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve()
    }, times ? times * 500 : 500)
  })
}

export function x86(nativeData: AppLauncher.Init.NativeResponse, serverData: AppLauncher.Init.ServerResponseData) {
  if (serverData.publics.x86 === "1") {
    if (nativeData.isX86) {
      return true
    }
  }
  if (serverData.publics.androidPie === "1") {
    let mainVersion = Number(String.prototype.toLowerCase.call(nativeData.operatorOs).replace(/android| /g, '').split('.')[0]) || 0;
    if (mainVersion >= 9) {
      return true
    }
  }
  return false
}
