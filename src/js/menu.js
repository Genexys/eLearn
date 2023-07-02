const toggleMenu = () => {
  const button = document.querySelector('.header__button-menu');
  const menu = document.querySelector('#header-menu');

  button?.addEventListener('click', function () {
    const expanded = button.getAttribute('aria-expanded') === 'true' || false;

    button.setAttribute('aria-expanded', !expanded);
    menu?.classList.toggle('header__menu--active');
  });
};

export { toggleMenu };
