var feedback = document.querySelector('.feedback');
var feedbackModal = document.querySelector('.modal-form');
var feedbackModalClose = document.querySelector('.modal-form--close');
var feedbackForm = document.querySelector('.modal-form form');

var feedbackUserNameInput = document.querySelector('#name-field');
var feedbackUserEmailInput = document.querySelector('#email-field');
var feedbackUserTextInput = document.querySelector('#letter-field');

var isStorageSupport = true;
var storage = '';

var ESC_KEYCODE = 27;

try {
  storageName = localStorage.getItem("userName");
  storageEmail = localStorage.getItem("userEmail");
} catch (err) {
  isStorageSupport = false;
}

feedback.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedbackModal.classList.add('modal-form--show');

  if (storageName && storageEmail) {
    feedbackUserNameInput.value = storageName;
    feedbackUserEmailInput.value = storageEmail;
    feedbackUserTextInput.focus();
  } else {
    feedbackUserNameInput.focus();
  }


});

feedbackModalClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedbackModal.classList.remove('modal-form--show');
  feedbackForm.classList.remove('modal-error');
});

feedbackForm.addEventListener('submit', function (evt) {
  if (!feedbackUserNameInput.value || !feedbackUserEmailInput.value || !feedbackUserTextInput.value) {
    evt.preventDefault();
    feedbackForm.classList.remove('modal-error');
    feedbackForm.offsetWidth = feedbackForm.offsetWidth;
    feedbackForm.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", feedbackUserNameInput.value);
      localStorage.setItem("userEmail", feedbackUserEmailInput.value);
    }
  }
});


window.addEventListener('keydown', function (evt) {
  if (evt.keyCode == ESC_KEYCODE) {
    if (feedbackModal.classList.contains('modal-form--show')) {
      evt.preventDefault();
      feedbackModal.classList.remove('modal-form--show');
      feedbackForm.classList.remove('modal-error');
    }
  }
});


// Map

var mapLink = document.querySelector('.map-link');
var mapModal = document.querySelector('.modal-map');

var mapClose = document.querySelector('.modal-map .button--close');

mapLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  mapModal.classList.add('modal-map--show');
});

mapClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  mapModal.classList.remove('modal-map--show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode == ESC_KEYCODE) {
    if (mapModal.classList.contains('modal-map--show')) {
      evt.preventDefault();
      mapModal.classList.remove('modal-map--show');
    }
  }
});
