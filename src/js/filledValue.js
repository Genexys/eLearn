const checkInputs = () => {
  const inputs = document.querySelectorAll('input');

  inputs.forEach((input) => {
    if (input.value.trim() !== '') {
      input.classList.add('input--has-value');
    } else {
      input.classList.remove('input--has-value');
    }
  });
};

export { checkInputs };
