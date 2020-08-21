/* eslint-disable new-cap, no-undef */
'use strict';
// Открыть-закрыть модальное окно
var ESC_KEY = 'Escape';

var body = document.querySelector('body');
var modal = document.querySelector('.modal');
var headerButton = document.querySelector('.page-header__button');
var modalCloseButton = document.querySelector('.modal__close-button');
var overlay = document.querySelector('.overlay');
var nameField = document.querySelector('.modal [type="text"]');

// Открывает с кнопки
if (headerButton) {
  headerButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (modal.classList.contains('modal--close')) {
      modal.classList.remove('modal--close');
      overlay.classList.remove('overlay--close');
      body.classList.add('overflow');
      nameField.focus();
    }
  });
}

// Закрывает с кнопки
if (modalCloseButton) {
  modalCloseButton.addEventListener('click', function () {
    if (!modal.classList.contains('modal--close')) {
      modal.classList.add('modal--close');
      overlay.classList.add('overlay--close');
      body.classList.remove('overflow');
    }
  });
}

// Закрытие клавишей ESC
window.addEventListener('keydown', function (evt) {
  if (evt.key === ESC_KEY) {
    evt.preventDefault();
    if (!modal.classList.contains('modal--close')) {
      modal.classList.add('modal--close');
      overlay.classList.add('overlay--close');
      body.classList.remove('overflow');
    }
  }
});

// Закрытие overlay
if (overlay) {
  overlay.addEventListener('click', function () {
    if (!modal.classList.contains('modal--close')) {
      modal.classList.add('modal--close');
      overlay.classList.add('overlay--close');
      body.classList.remove('overflow');
    }
  });
}

// Скрол
var introLink = document.querySelector('.intro__link');
var introScroll = document.querySelector('.intro__scroll');
var advantages = document.querySelector('#advantages');
var feedback = document.querySelector('#feedback');

if (introLink) {
  introLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    feedback.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

if (introScroll) {
  introScroll.addEventListener('click', function (evt) {
    evt.preventDefault();
    advantages.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

// Открывает и закрывает Аккордеон
var accordions = document.querySelectorAll('.page-footer__accordion');
var accordionsButton = document.querySelectorAll('.page-footer__button-accordion');
var accordionsList = document.querySelectorAll('.page-footer__accordion-list');
var accordionsOpen = document.querySelectorAll('.page-footer__accordion-open-block');

if(accordions) {
  accordions.forEach(function (accordion) {
    var button = accordion.querySelector('.page-footer__button-accordion');
    var list = accordion.querySelector('.page-footer__accordion-list');
    var openBlock = accordion.querySelector('.page-footer__accordion-open-block');

    button.classList.remove('page-footer__button-accordion--nojs');
    list.classList.remove('page-footer__accordion-list--nojs');

    openBlock.addEventListener('click', function () {
      if (button.classList.contains('page-footer__button-accordion--opened')) {
        button.classList.remove('page-footer__button-accordion--opened');
      } else {
        accordionsButton.forEach(function (accordionButton) {
          accordionButton.classList.remove('page-footer__button-accordion--opened');
        });
        button.classList.add('page-footer__button-accordion--opened');
      }
      if (list.classList.contains('page-footer__accordion-list--opened')) {
        list.classList.remove('page-footer__accordion-list--opened');
      } else {
        accordionsList.forEach(function (accordionList) {
          accordionList.classList.remove('page-footer__accordion-list--opened');
        });
        list.classList.add('page-footer__accordion-list--opened');
      }
    });
  });
}

// Валидация для телефона
var phone = document.querySelector('#phone');
var modalPhone = document.querySelector('#phone-modal');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = new IMask(phone, maskOptions);
var maskModal = new IMask(modalPhone, maskOptions);

// Хранение данных в LocalStorage

var feedbackForm = document.querySelector('.feedback__form');
var modalForm = document.querySelector('.modal__form');
var nameInput = feedbackForm.querySelector('#name');
var nameInputModal = document.querySelector('#name-modal');
var phoneInput = feedbackForm.querySelector('#phone');
var phoneInputModal = document.querySelector('#phone-modal');
var messageInput = feedbackForm.querySelector('#question');
var messageInputModal = document.querySelector('#message-modal');

if (feedbackForm) {
  feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();

    localStorage.setItem('name-field', nameInput.value);
    localStorage.setItem('phone-field', phoneInput.value);
    localStorage.setItem('question-field', messageInput.value);
  });
}

if (modalForm) {
  modalForm.addEventListener('submit', function (event) {
    event.preventDefault();

    localStorage.setItem('name-modal', nameInputModal.value);
    localStorage.setItem('phone-modal', phoneInputModal.value);
    localStorage.setItem('message-modal', messageInputModal.value);
  });
}
