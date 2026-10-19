import '../styles/main.scss'

import 'swiper/css'
import 'swiper/css/navigation'

import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

new Swiper('.swiper', {
  modules: [Navigation],
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})

document.querySelector('#app').innerHTML = `

<h1>Hello</h1>
`

setupCounter(document.querySelector('#counter'))
