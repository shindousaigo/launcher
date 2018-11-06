export default class Polyfill {
  private polyfills = ["Promise", "Set", "Map", "Object.assign"]
  private polyfillUrl = "https://polyfill.io/v2/polyfill.min.js"
  public features = []
  constructor() {
    this.polyfills.forEach(feature => {
      if (!(feature in window)) {
        this.features.push(feature)
      }
    })
    if (this.features.length) {
      var s = document.createElement("script")
      s.src = `${this.polyfillUrl}?features=${this.features.join(',')}&flags=gated,always&rum=0&callback=Main`
      s.async = true
      document.head.appendChild(s)
    } else {
      window.Main()
    }
  }
}
