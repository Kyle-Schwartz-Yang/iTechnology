
import { initialSwiper } from "./_Swiper";

import { Thumbs, Autoplay } from 'swiper/modules';


export const initSwiperThumbs = () => {
  const swiperThumbs = initialSwiper('.showcase-thumbs', {
    modules: [Thumbs],
    loop: true,
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
    direction: 'vertical', // Делаем Swiper вертикальным
  });



  const swiperShowcase = initialSwiper('.showcase-swiper', {
    modules: [Thumbs, Autoplay],
    loop: true,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },


    thumbs: {
      swiper: swiperThumbs,
    },

  });


  return { swiperShowcase, swiperThumbs };
}



// const swiperThumbs = new Swiper(".showcase-thumbs", {
//   modules: [Thumbs],

//   loop: true,
//   spaceBetween: 10,
//   slidesPerView: 4,
//   freeMode: true,
//   watchSlidesProgress: true,

// });



// const swiperShowcase = library.initialSwiper('.swiper-showcase', {
//   modules: [Navigation, Thumbs],
//   loop: true,
//   spaceBetween: 10,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   thumbs: {
//     swiper: swiperThumbs,
//   },
// });









