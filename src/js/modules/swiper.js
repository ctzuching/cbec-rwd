import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function initHomeSwiper() {
  const el = document.querySelector('.marquee-swiper');
  if (!el) return;

  new Swiper(el, {
    modules: [Autoplay],

    direction: 'vertical',
    loop: true,

    autoplay: {
      delay: 3000,
    },
  });
}

export function initHeroSwiper() {
  const el = document.querySelector('.banner-swiper');
  if (!el) return;

  new Swiper(el, {
    modules: [Pagination, Autoplay],

    loop: true,

    autoplay: {
      delay: 5000,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

export function initProductSwiper() {
  const el = document.querySelector('.product-swiper');
  if (!el) return;

  new Swiper(el, {
    modules: [Navigation],

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 12,
      },

      576: {
        slidesPerView: 2,
        spaceBetween: 16,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 16,
      },

      1200: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
  });
}