;(async () => {
  const Swiper = (await import('./vendors/swiper.js')).default

  new Swiper('#available-swiper', {
    spaceBetween: 15,
    slidesPerView: 3.8,
    breakpoints: {
      1366: {
        slidesPerView: 3.8,
      },
      1024: {
        slidesPerView: 5.5,
      },
      880: {
        slidesPerView: 4.2,
      },
      721: {
        slidesPerView: 3.2,
      },
      580: {
        slidesPerView: 2.5,
      },
      500: {
        slidesPerView: 1.8,
      },
      320: {
        slidesPerView: 1.4,
      },
    },
  })

  new Swiper('#staked-swiper', {
    slidesPerView: 3.8,
    spaceBetween: 15,
    breakpoints: {
      1366: {
        slidesPerView: 3.8,
      },
      1024: {
        slidesPerView: 5.5,
      },
      880: {
        slidesPerView: 4.2,
      },
      721: {
        slidesPerView: 3.2,
      },
      580: {
        slidesPerView: 2.5,
      },
      500: {
        slidesPerView: 1.8,
      },
      320: {
        slidesPerView: 1.4,
      },
    },
  })

  const showedModalWindow = () => {
    const btn = document.querySelector('#connect-wallet')
    const modal = document.querySelector('#modal-connect__wallet')
    const btnClose = modal.querySelector('#modal-close')
    const btnCloseBg = modal.querySelector('#modal-close__background')

    btnClose.addEventListener('click', () => {
      modal.classList.remove('modal--active')
    })

    btnCloseBg.addEventListener('click', () => {
      modal.classList.remove('modal--active')
    })

    btn.addEventListener('click', () => {
      modal.classList.add('modal--active')
    })
  }

  showedModalWindow()
})()
