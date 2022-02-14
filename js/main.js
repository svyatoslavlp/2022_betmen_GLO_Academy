const swiper = new Swiper('.swiper', {

   spaceBetween: 30,
   // Optional parameters
   loop: true,

   // Navigation arrows
   navigation: {
      nextEl: '.main__series-arrow',
   },
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      }
   }

});

let burger = document.querySelector('.menu-burger');
let closeMenu = document.querySelector('.header__menu-close');
let menuMobile = document.querySelector('.header');

burger.addEventListener('click', () => {
   menuMobile.style.display = 'block';
})

closeMenu.addEventListener('click', () => {
   menuMobile.style.display = 'none';
})