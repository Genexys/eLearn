const popUp = () => {
  const openPopupButton = document.querySelector('.open-registration');
  const closePopupButton = document.querySelector('.close-popup-button');
  const popupOverlay = document.getElementById('popup-overlay');
  const popupContent = document.getElementById('popup-content');
  const popupContentInner = document.getElementById('popup-content__inner');

  openPopupButton?.addEventListener('click', openPopup);
  closePopupButton?.addEventListener('click', closePopup);
  popupOverlay?.addEventListener('click', closePopup);

  function openPopup() {
    popupOverlay.style = 'opacity: 1; visibility: visible';
    popupContent.style = 'opacity: 1; visibility: visible';
    popupOverlay?.setAttribute('aria-hidden', 'false');
    popupContentInner?.focus();
  }

  function closePopup(event) {
    popupOverlay.style = 'opacity: 0; visibility: hidden';
    popupContent.style = 'opacity: 0; visibility: hidden';
    popupOverlay?.setAttribute('aria-hidden', 'true');
  }
};

export { popUp };
