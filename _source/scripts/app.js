"use strict"
//-------------------------------------------------------


// import Swiper from 'swiper';
// import { Pagination, Keyboard, EffectCards, Autoplay, Navigation, Thumbs } from 'swiper/modules';
// import 'swiper/css/bundle';

/*
import { modules } from './modules.js';
import { library } from './library.js';
*/
import { library } from './library.js';
import { modules } from './modules.js';



// ------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {


  // const { swiperShowcase, swiperThumbs } = library.initSwiperThumbs();

  library.initSwiperThumbs();



  // library.initialSwiper('.swiper-showcase', {

  //   autoplay: { delay: 3000 },

  // });



  /*
  library.initialSwiper('.swiper-dog', { autoplay: { delay: 3000 } });
  library.initialSwiper('.swiper-cat', { autoplay: { delay: 100 },  direction: 'horizontal' });
  modules.initModals();
  modules.initAnimation();  
  modules.initValidateForm('form1', { argFormImage: 'formImage', argFormPreview: 'formPreview' }, null);
  modules.initValidateForm('myFormId', null, { url: 'https://your-server-url.com/submit',method: 'POST' });
  */

  modules.initAnimation();

  modules.initModals();
  modules.initHeader();

  // -----------------------------------------------

  // modules.initSearchLive({
  //   searchInputSelector: '.help-modal-search',
  //   searchElementSelector: '.help-modal__item',
  //   elementTittle: '.help-modal__span',
  //   searchMode: true,
  // });






  // -----------------------------------------------

  modules.initValidateForm('form-signin');



  // ------------------------------------------Plugins


  const filterSystem = new modules.FilterSystem('store-category', {
    toggleSelector: '.tab-button',
    contentSelector: '.tab-content',
    activeSelector: '_active'
  })
  filterSystem.init();

  modules.initSearchLive({
    searchInputSelector: '.tabbed-categories-search',
    searchElementSelector: '.tab-content',
    elementTittle: '.card__title',
    searchMode: false,
  });



  const randomProducts = new modules.RandomProducts({

    containerId: 'randomCard',
    buttonId: 'changeCardButton',
    templateId: 'card-template'
  });
  randomProducts.init();





  // ! Random-products







  // !----------------------------------------------------
});




