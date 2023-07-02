const visiblePassword = () => {
  const passwordInput = document.querySelectorAll('input[type="password"]');

  passwordInput.forEach((input) => {
    const togglePasswordBtn = input.parentElement?.querySelector('.toggle-password');

    togglePasswordBtn?.addEventListener('click', () => {
      const passwordFieldType = input.getAttribute('type');

      const newFieldType = passwordFieldType === 'password' ? 'text' : 'password';

      input.setAttribute('type', newFieldType);
      togglePasswordBtn.classList.toggle('input--show-password');
    });
  });
};

export { visiblePassword };
