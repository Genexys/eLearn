const validateRegisterForm = () => {
  const form = document.querySelector('.registration-form');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      form.submit();
    }
  };

  const validateForm = () => {
    let isValid = true;

    const nameField = form.querySelector('input[name="name"]');
    if (nameField.value.trim() === '') {
      isValid = false;
      nameField?.parentElement.classList.add('input--invalid');
    } else {
      nameField?.parentElement.classList.remove('input--invalid');
    }

    const emailField = form.querySelector('input[name="email"]');
    if (!isValidEmail(emailField.value.trim())) {
      isValid = false;
      emailField.parentElement.classList.add('input--invalid');
    } else {
      emailField.parentElement.classList.remove('input--invalid');
    }

    const phoneField = form.querySelector('input[name="phone"]');
    if (!isValidPhone(phoneField.value.trim())) {
      isValid = false;
      phoneField.parentElement.classList.add('input--invalid');
    } else {
      phoneField.parentElement.classList.remove('input--invalid');
    }

    const passwordField = form.querySelector('input[name="password"]');
    if (passwordField.value.trim() === '' || passwordField.value.length < 4) {
      isValid = false;
      passwordField.parentElement.classList.add('input--invalid');
    } else {
      passwordField.parentElement.classList.remove('input--invalid');
    }

    const confirmPasswordField = form.querySelector('input[name="repeat_password"]');
    if (
      confirmPasswordField.value.trim() === '' ||
      confirmPasswordField.value !== passwordField.value
    ) {
      isValid = false;
      confirmPasswordField.parentElement.classList.add('input--invalid');
    } else {
      confirmPasswordField.parentElement.classList.remove('input--invalid');
    }

    const agreeCheckbox = form?.querySelector('#agree');
    if (!agreeCheckbox?.checked) {
      isValid = false;
      agreeCheckbox.parentElement.classList.add('checkbox--invalid');
    } else {
      agreeCheckbox.parentElement.classList.remove('checkbox--invalid');
    }

    return isValid;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  form.addEventListener('submit', handleSubmit);
};

export { validateRegisterForm };
