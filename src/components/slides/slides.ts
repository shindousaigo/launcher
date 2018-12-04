require('./style.css');
require('src/bower/swiper/dist/css/swiper.min.css')
import Swiper from "swiper"

export default class Slides {
  constructor(options) {
    let imgages = options.images
    let html = ''
    let wrapper = document.querySelector('.swiper-wrapper')
    wrapper['style'].width = imgages.length * 100 + '%'
    imgages.forEach(url => {
      html += `<div class="swiper-slide"><img class="swiper-img" src=${url} /></div>`
    })
    wrapper.innerHTML = html
    var swiper = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    })

    setInterval(() => {
      swiper.slideNext(700)
    }, 4500)

  }
}