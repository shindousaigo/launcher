export function Delay(times?) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve()
    }, times ? times * 500 : 500)
  })
}
