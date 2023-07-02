import { toggleMenu } from './menu';
import { popUp } from './popup';
import Select from './select';
import { checkInputs } from './filledValue';
import { visiblePassword } from './visiblePassword';
import { validateRegisterForm } from './validateRegisterForm';

import '../styles/main.scss';

document.addEventListener('DOMContentLoaded', function () {
  const customSelect = new Select('custom-select');

  document.addEventListener('input', checkInputs);

  checkInputs();
  toggleMenu();
  popUp();
  visiblePassword();
  validateRegisterForm();
});
