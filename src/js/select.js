class Select {
  constructor(selector) {
    this.selectElement = document.querySelector(`.${selector}`);
    this.selectTrigger = this.selectElement?.querySelector('.select-trigger');
    this.selectTriggerText = this.selectElement?.querySelector('.select-trigger__text');
    this.selectOptionContainer = this.selectElement?.querySelector('.select-options');
    this.selectOptions = this.selectElement?.querySelectorAll('.select-option');

    // this.selectTrigger?.addEventListener('mouseclick', this.toggleSelectOptions.bind(this));

    this.selectOptions?.forEach((option) => {
      option.addEventListener('click', this.selectOption.bind(this));
    });

    document.addEventListener('keydown', this.handleKeyboardNavigation.bind(this));
    document.addEventListener('click', this.handleClickOutside.bind(this));
    document.addEventListener('focusin', this.handleFocusIn.bind(this));
  }

  toggleSelectOptions() {
    const isOptionsVisible = this.selectOptionContainer.style.display === 'block';

    if (isOptionsVisible) {
      this.closeSelectOptions();
    } else {
      this.selectTrigger?.classList.add('select-trigger--open');
      this.selectOptionContainer.style.display = 'block';
    }

    this.selectOptions[0].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    this.selectOptions[0].focus();

    this.selectOptions[0].addEventListener('blur', this.handleOptionBlur.bind(this));

    this.selectTrigger.setAttribute('aria-activedescendant', this.selectOptions[0].id);
  }

  selectOption(event) {
    this.selectOptions.forEach((option) => {
      option.classList.remove('selected');
      option.setAttribute('aria-selected', 'false');
    });

    const selectedOption = event.target;
    selectedOption.classList.add('selected');
    selectedOption.setAttribute('aria-selected', 'true');

    this.selectTriggerText.textContent = selectedOption.textContent;
    this.selectTrigger.setAttribute('aria-activedescendant', selectedOption.id);
  }

  handleKeyboardNavigation(event) {
    if (event.key === 'Escape') {
      this.closeSelectOptions();
    }

    if (event.key === 'Enter') {
      const selectedOption = this.selectElement.querySelector('.select-option.selected');
      if (selectedOption) {
        this.selectOption({ target: selectedOption });
        this.closeSelectOptions();
      }
    }

    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      const selectedOption = this.selectElement.querySelector('.select-option.selected');

      const currentIndex = Array.from(this.selectOptions).indexOf(selectedOption);
      let nextIndex;

      if (event.key === 'ArrowUp') {
        nextIndex = currentIndex > 0 ? currentIndex - 1 : this.selectOptions.length - 1;
      } else if (event.key === 'ArrowDown') {
        nextIndex = currentIndex < this.selectOptions.length - 1 ? currentIndex + 1 : 0;
      }

      this.selectOptions.forEach((option) => {
        option.classList.remove('selected');
        option.setAttribute('aria-selected', 'false');
      });

      this.selectOptions[nextIndex].classList.add('selected');
      this.selectOptions[nextIndex].setAttribute('aria-selected', 'true');

      this.selectOptions[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      this.selectOptions[nextIndex].focus();

      this.selectOptions[nextIndex].addEventListener('blur', this.handleOptionBlur.bind(this));
    }
  }

  handleClickOutside(event) {
    const isClickedOutside =
      !this.selectTrigger.contains(event.target) &&
      !this.selectOptionContainer.contains(event.target);

    if (isClickedOutside) {
      this.closeSelectOptions();
    }
  }

  handleFocusIn(event) {
    if (document.activeElement === this.selectElement) {
      this.toggleSelectOptions();
    } else if (!this.selectOptionContainer.contains(event.target)) {
      this.closeSelectOptions();
    }
  }

  handleOptionBlur(event) {
    this.selectTrigger.textContent = event.target.textContent;
    event.target.removeEventListener('blur', this.handleOptionBlur.bind(this));
  }

  closeSelectOptions() {
    this.selectOptionContainer.style.display = 'none';
    this.selectTrigger?.classList.remove('select-trigger--open');
  }

  resetOptions() {
    this.selectOptions.forEach((option) => {
      option.classList.remove('selected');
      option.setAttribute('aria-selected', 'false');
    });

    this.selectOptions[0].classList.add('selected');
    this.selectOptions[0].setAttribute('aria-selected', 'true');

    this.selectOptions[0].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    this.selectOptions[0].focus();

    this.selectOptions[0].addEventListener('blur', this.handleOptionBlur.bind(this));

    this.selectOptions[0].click();
    this.selectOptions[0].focus();
    this.selectOptions[0].setAttribute('tabindex', '0');

    this.selectOptions.forEach((option) => {
      option.setAttribute('tabindex', '-1');
    });

    this.selectTrigger.setAttribute('aria-activedescendant', this.selectOptions[0].id);
  }
}

export default Select;
