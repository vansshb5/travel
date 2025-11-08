let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

/* guard in case selectors are missing */
if (menu && navbar) {
  menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  };

  /* close menu when user scrolls */
  window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  };
}
const swiper = new Swiper('.home-slider', {
    loop:true,
    grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
   autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
});