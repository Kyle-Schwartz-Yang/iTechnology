
// import { headerDropdown } from "../components/headerItem/_HeaderItem";


export const initBurgerMenu = () => {

  // ---------------------------------------------------------------
  const headerElement = {
    menu: document.querySelector('.menu__overlay'),
    burger: document.querySelector('.menu__burger'),
    closeBtn: document.querySelector('.menu__close'),
    body: document.body,
  };

  const { menu, burger, closeBtn, body } = headerElement;
  // ---------------------------------------------------------------

  if (burger) {
    // -----------------------------------------
    function toggleEvent(action) {
      menu.classList[action]('_active');
      burger.classList[action]('_open')
      body.classList[action]('_lock-body-fixed');
    }

    // -----------------------------------------
    burger.addEventListener('click', function (e) {
      // Добавление классов для активации
      toggleEvent('add');

      // Удалить классы активации при нажатие на close
      if (closeBtn) {
        closeBtn.addEventListener('click', function (e) {
          toggleEvent('remove');
        })
      }

      // Удаление классов активации при нажатии на Escape or на пустое пространство
      if (menu.classList.contains('_active')) {

        document.addEventListener('keydown', (event) => {
          if (event.key === 'Escape') {
            toggleEvent('remove');
          }
        });

        menu.addEventListener('click', function (event) {
          if (!event.target.closest('.menu__body')) {
            toggleEvent('remove');
          }
        });
      }

    })
  }

  // headerDropdown();
}
