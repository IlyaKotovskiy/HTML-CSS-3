(function () {
  document.addEventListener('DOMContentLoaded', () => {
    // перемещаем страницу в самый верх при f5
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };

    // preloader
    document.body.style.overflow = 'hidden';

    const loaderWrap = document.querySelector('.loader-wrap');
    setTimeout(() => {
      loaderWrap.classList.add('disabled');
      document.body.style.overflow = '';

      setTimeout(() => {
        loaderWrap.style.display = 'none';
      }, 1000);
    }, 2000);

    // WOW
    new WOW().init();

    // Swiper
    const swiper = new Swiper('.swiper', {
      slidesPerView: 3, // количество видимых слайдов
      loop: true, // создать бесконечный цикл прокрутки
      speed: 1000, // скорость анимации прокрутки в миллисекундах
      autoplay: {
        delay: 3000, // время между прокруткой слайдов в миллисекундах
      },
      breakpoints: {
        1024: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 2
        },
        320: {
          slidesPerView: 1
        }
      }
    });
  });
})();
