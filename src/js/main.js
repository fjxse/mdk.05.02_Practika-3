import '../styles/main.scss'

import 'swiper/css'
import 'swiper/css/navigation'

import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import logo from '../assets/svg/Logo.svg'
import burger from '../assets/svg/burger.svg'
import call from '../assets/svg/call.svg'
import chat from '../assets/svg/chat.svg'
import profile from '../assets/svg/profile.svg'
import repair from '../assets/svg/repair.svg'
import checkStatus from '../assets/svg/checkstatus.svg'

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
  <header class="header">
    <div class="header__brand">
      <button class="header__menu" type="button" aria-label="Открыть меню">
        <img src="${burger}" alt="">
      </button>
      <span class="header__divider" aria-hidden="true"></span>
      <a class="header__logo" href="#" aria-label="CPS — главная">
        <img src="${logo}" alt="CPS">
      </a>
    </div>
    <div class="header__actions">
      <div class="header__contacts">
        <a class="header__action" href="tel:+78008908900" aria-label="Позвонить">
          <img src="${call}" alt="">
        </a>
        <a class="header__action" href="#" aria-label="Написать сообщение">
          <img src="${chat}" alt="">
        </a>
        <a class="header__action" href="#" aria-label="Профиль">
          <img src="${profile}" alt="">
        </a>
      </div>
      <span class="header__divider header__divider--actions" aria-hidden="true"></span>
      <div class="header__tools">
        <a class="header__action" href="#" aria-label="Ремонт и обслуживание"><img src="${repair}" alt=""></a>
        <a class="header__action" href="#" aria-label="Проверить статус"><img src="${checkStatus}" alt=""></a>
      </div>
    </div>
  </header>
`
