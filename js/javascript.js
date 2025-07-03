  const swiper = new Swiper('.videoSwiper', {
    loop: true,
    loopedSlides: 7,
    slidesPerView: 'auto',
    spaceBetween: 20,
    speed: 2500,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    freeMode: true,
    freeModeMomentum: false,
  });

  const swiperEl = document.querySelector('.videoSwiper');
  swiperEl.addEventListener('mouseenter', () => {
    swiper.params.speed = 8000;
    swiper.autoplay.stop();
  });
  swiperEl.addEventListener('mouseleave', () => {
    swiper.params.speed = 3000;
    swiper.autoplay.start();
  });

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // voor kruisje
    navLinks.classList.toggle('active'); // voor menu tonen
  });

  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".contactCTA");
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        window.location.href = "pagina's/contact.html";
      });
    });
  });