let popup = document.querySelector('.popup');
let openPopupBtn = document.getElementById('open_popup_btn');
let closePopupBtn = document.querySelector('.popup__close-button');
let popupOverlay = document.querySelector('.popup__overlay');
let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__item_el_heading');
let jobInput = document.querySelector('.form__item_el_subheading');
let heading = document.querySelector('.profile__title');
let subheading = document.querySelector('.profile__subtitle');
let closeFormButton = document.querySelector('.form__button');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = heading.textContent;
  jobInput.value = subheading.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}
function formSubmitHandler (evt) {
  evt.preventDefault();
    closePopup();
    heading.textContent = nameInput.value;
    subheading.textContent = jobInput.value;
}
openPopupBtn.addEventListener('click', function() {
openPopup();
});
closePopupBtn.addEventListener('click', function() {
  closePopup();
});

popupOverlay.addEventListener('click', function() {
  closePopup();
});


formElement.addEventListener('submit', formSubmitHandler);


