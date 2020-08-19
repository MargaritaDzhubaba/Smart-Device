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
  if (evt.keyCode === ESC_KEY) {
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

if(accordions) {
  accordions.forEach(function (accordion) {
    var button = accordion.querySelector('.page-footer__button-accordion');
    var list = accordion.querySelector('.page-footer__accordion-list');

    button.classList.remove('page-footer__button-accordion--nojs');
    list.classList.remove('page-footer__accordion-list--nojs');

    button.addEventListener('click', function () {
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
var messageInput = feedbackForm.querySelector('#message');
var messageInputModal = document.querySelector('#message-modal');

var isStorageSupport = true;
var storage = {};

try {
  storage.nameInput = localStorage.getItem('nameInput');
  storage.phoneInput = localStorage.getItem('phoneInput');
  storage.messageInput = localStorage.getItem('messageInput');

} catch (err) {
  isStorageSupport = false;
}

if (storage) {
  nameInput.value = storage.nameInput;
  phoneInput.value = storage.phoneInput;
  messageInput.value = storage.messageInput;
}

if (feedbackForm) {
  feedbackForm.addEventListener('submit', function (evt) {
    if (!nameInput.value || !phoneInput.value || !messageInput.value) {
      evt.preventDefault();

    } else {
      if (isStorageSupport) {
        localStorage.setItem('nameInput', nameInput.value);
        localStorage.setItem('phoneInput', phoneInput.value);
        localStorage.setItem('messageInput', messageInput.value);
      }
    }
  });
}

try {
  storage.nameInputModal = localStorage.getItem('nameInputModal');
  storage.phoneInputModal = localStorage.getItem('phoneInputModal');
  storage.messageInputModal = localStorage.getItem('messageInputModal');

} catch (err) {
  isStorageSupport = false;
}

if (storage) {
  nameInputModal.value = storage.nameInputModal;
  phoneInputModal.value = storage.phoneInputModal;
  messageInputModal.value = storage.messageInputModal;
}

if (modalForm) {
  modalForm.addEventListener('submit', function (evt) {
    if (!nameInputModal.value || !phoneInputModal.value || !messageInputModal.value) {
      evt.preventDefault();

    } else {
      if (isStorageSupport) {
        localStorage.setItem('nameInputModal', nameInputModal.value);
        localStorage.setItem('phoneInputModal', phoneInputModal.value);
        localStorage.setItem('messageInputModal', messageInputModal.value);
      }
    }
  });
}
