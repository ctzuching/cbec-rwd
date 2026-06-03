import '../scss/style.scss';
import * as bootstrap from 'bootstrap';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const page = document.body.dataset.page;
if (page === 'home') {
  import('./modules/swiper.js').then(m => m.initHomeSwiper());
  import('./modules/swiper.js').then(m => m.initHeroSwiper());
  import('./modules/swiper.js').then(m => m.initProductSwiper());
}

const lightbox = GLightbox({
  touchNavigation: false,
  loop: false,
  draggable: false,
  closeButton: true
})

document.querySelector('.search-trigger').addEventListener('click', (e) => {
  e.preventDefault()

  lightbox.setElements([
    {
      content: document.querySelector('#search-overlay').innerHTML
    }
  ])

    lightbox.open()
})

const toastButtons = document.querySelectorAll('.addToastBtn')
const toastElement = document.getElementById('addCartToast')

if (toastElement) {
  const toast = bootstrap.Toast.getOrCreateInstance(
    toastElement
  )

  toastButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault()

      const card = btn.closest('.card')

      const img =
        card.querySelector('.product-img').src

      const name =
        card.querySelector('.product-name')
        .textContent

      const salePrice =
        card.querySelector('.product-sale-price')
        .textContent

      const originalPrice =
        card.querySelector('.product-original-price')
        .textContent

      toastElement.querySelector('.cart-img').src =
        img

      toastElement.querySelector('.cart-product')
        .textContent = name

      toastElement.querySelector(
        '.cart-sale-price'
      ).textContent = salePrice

      toastElement.querySelector(
        '.cart-original-price'
      ).textContent = originalPrice

      toast.show()
    })
  })
}

const navLogo = document.querySelector('.nav-logo');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navLogo.classList.add('shrink');
    } else {
      navLogo.classList.remove('shrink');
    }
  });