
import { randomContent } from "../_helpers/scripts/_initData.js";


/*
import { RandomCard } from './helper/randomCard/_randomCard.js';
new RandomCard('randomCard', 'changeCardButton', 'card-template');

*/


export class RandomProducts {

  constructor(config = {}) {
    // this.container = document.getElementById(containerId);
    // this.button = document.getElementById(buttonId);
    // this.template = document.getElementById(templateId);

    this.container = document.getElementById(config.containerId);
    this.button = document.getElementById(config.buttonId);
    this.template = document.getElementById(config.templateId);

    this.randomContent = randomContent; // Для удобного использования 

    this.shownIndices = []; // Создать новый массив для заполнения
    this.init(); //Запусить дейсвия по умолчанию

  }

  // Выполнить действия по нажатию... И выполнить дейсвия по умолчанию.
  init() {
    this.updateCard(this.randomContent[0]);
    if (this.button) {
      this.button.addEventListener('click', () => this.changeCard());
    }
  }

  // Получить случайные данные из...
  changeCard() {

    if (this.shownIndices.length >= 5) {
      // Длина массива больше или равна 2, сбрасываем список
      this.shownIndices = [];
    }

    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.randomContent.length);
    } while (this.shownIndices.includes(newIndex));

    this.shownIndices.push(newIndex);
    this.updateCard(this.randomContent[newIndex]);

  }

  // Заменить на даннные из ...
  updateCard(cardData) {
    const cardElement = this.template.content.cloneNode(true);
    const productTitle = document.querySelector('.random-products__title');
    const productText = document.querySelector('.random-products__text');


    const reduceText = (text, length) => {
      if (!text) return '';
      if (text.length <= length) return text;
      return text.slice(0, length) + '...';
    }

    productTitle.textContent = cardData.title;
    productText.textContent = reduceText(cardData.txt, 200);
    cardElement.querySelector('.card__title').textContent = cardData.title;
    cardElement.querySelector('.card__txt').textContent = reduceText(cardData.txt, 118);



    //---------------------------------------------------------------------------------------
    // cardElement.querySelector('img').src = cardData.image;
    // cardElement.querySelector('img').alt = cardData.title;


    const imgElement = cardElement.querySelector('img');
    imgElement.alt = cardData.title || '';
    imgElement.src = cardData.image || ``;


    // cardElement.querySelector('video').src = cardData.video;
    // cardElement.querySelector('video').type = cardData.videoType;

    const videoElement = cardElement.querySelector('video');
    if (videoElement) {
      // Установка src и type для video

      const sourceElement = videoElement.querySelector('source');
      if (sourceElement) {
        if (cardData.video && this.isValidUrl(cardData.video)) {
          sourceElement.src = cardData.video;
          sourceElement.type = cardData.videoType;

          // Обработка ошибки загрузки
          sourceElement.onerror = () => {
            sourceElement.src = ''; // Пустой src или заглушка
            sourceElement.type = '';
            sourceElement.onerror = null; // Убираем обработчик ошибки после первого срабатывания
          };
        } else {
          sourceElement.src = ''; // Пустой src или заглушка
          sourceElement.type = '';
          sourceElement.onerror = null; // Убираем обработчик ошибки
        }
      }
    }

    //---------------------------------------------------------------------------------------

    cardElement.querySelector('.original-price').textContent = cardData.oldPrice;
    cardElement.querySelector('.discounted-price').textContent = cardData.newPrice;


    cardElement.querySelector('.likes-count').textContent = cardData.likes;

    this.container.innerHTML = '';
    this.container.appendChild(cardElement);
  }

  // --------------------------------------ДОПОЛНИТЕЛЬНО 


  isValidUrl(url) {
    // Проверка на абсолютный URL
    try {
      new URL(url);
      return true;
    } catch (e) {
      // Если не абсолютный, проверяем относительный путь
      const relativePathPattern = /^\.{1,2}\/[^\s/$.?#].[^\s]*$/;
      return relativePathPattern.test(url);
    }
  }



}