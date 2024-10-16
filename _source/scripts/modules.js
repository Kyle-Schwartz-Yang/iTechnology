
//--------------------------------------------------------
import { initAnimation } from "./modules/initAnimation/_initAnimation.js";
import { initModals } from "./modules/initModals/_initModals.js";
import { initSearchLive } from "./modules/initSeacrchLive/_initSearchLive.js";
import { initValidateForm } from "./modules/initValidateForm/_initValidateForm.js";




// ----------------------------NO-Modules (START)

// HEADER.js
import { initHeader } from "../components/widgets/Header/_inxdex.js";
import { RandomProducts } from "../components/widgets/Random-products/_index.js";



// ----------------------------NO-Modules (END)


// -------------------------------Plugins


import { FilterSystem } from "./modules/plugin/base-toggle-system/_filter-system.js";

// -------------------------------Plugins



//--------------------------------------------------------
export const modules = {
  initModals: initModals,
  initAnimation: initAnimation,
  initSearchLive: initSearchLive,

  // -------------------NO-Modules
  initHeader: initHeader,
  initValidateForm: initValidateForm,
  RandomProducts: RandomProducts,
  // -------------------NO-Modules


  // --------------Plugins

  FilterSystem: FilterSystem,

  // --------------Plugins
};
