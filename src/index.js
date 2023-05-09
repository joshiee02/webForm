const email = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const country = document.querySelector('#country');
const zip = document.querySelector('#zip');
const zipError = document.querySelector('#zipError');
const password = document.querySelector('#password');
const pwError = document.querySelector('#pwError');
const confirmPassword = document.querySelector('#confirmPassword');
const confirmPwError = document.querySelector('#confirm_pwError');
const submitButton = document.querySelector('#submitButton');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
});

function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.classList.remove('valid');
    emailError.classList.add('invalid');
    emailError.textContent = '✕ You need to enter an email address.';
  } else if (email.validity.typeMismatch) {
    emailError.classList.remove('valid');
    emailError.classList.add('invalid');
    emailError.textContent = '✕ Entered value needs to be an email address.';
  }
}

email.addEventListener('input', () => {
  if (email.validity.valid) {
    emailError.classList.remove('invalid');
    emailError.classList.add('valid');
    emailError.textContent = '✓ Your email looks good!';
  } else {
    showEmailError();
  }
});

country.addEventListener('change', () => {
  if (!country.value) {
    country.style.color = 'gray';
  } else {
    country.style.color = 'black';
  }
});

function showZipError() {
  if (zip.validity.valueMissing) {
    zipError.classList.remove('valid');
    zipError.classList.add('invalid');
    zipError.textContent = '✕ You need to enter a zip code.';
  } else if (zip.validity.patternMismatch) {
    zipError.classList.remove('valid');
    zipError.classList.add('invalid');
    zipError.textContent = '✕ Entered value needs to be a zip code.';
  }
}

zip.addEventListener('input', () => {
  if (zip.validity.valid) {
    zipError.classList.remove('invalid');
    zipError.classList.add('valid');
    zipError.textContent = '✓ Your zip code looks good!';
  } else {
    showZipError();
  }
});

function showPasswordError() {
  if (password.validity.valueMissing) {
    pwError.classList.remove('valid');
    pwError.classList.add('invalid');
    pwError.textContent = '✕ You need to enter a password.';
  } else if (password.validity.patternMismatch) {
    pwError.classList.remove('valid');
    pwError.classList.add('invalid');
    pwError.textContent = '✕ Your passwords needs to have an upper case letter.';
  } else if (password.validity.tooShort) {
    pwError.classList.remove('valid');
    pwError.classList.add('invalid');
    pwError.textContent = `✕ Your password should have at least ${password.minLength} letters.`;
  } else if (password.validity.tooLong) {
    pwError.classList.remove('valid');
    pwError.classList.add('invalid');
    pwError.textContent = `✕ Your password has exceed the max length of ${password.maxLength}`;
  }
}

password.addEventListener('input', () => {
  if (password.validity.valid) {
    pwError.classList.remove('invalid');
    pwError.classList.add('valid');
    pwError.textContent = '✓ Your password looks good!';
  } else {
    showPasswordError();
  }
});

function showConfirmPasswordError() {
  if (password.value !== confirmPassword.value) {
    confirmPwError.classList.remove('valid');
    confirmPwError.classList.add('invalid');
    confirmPwError.textContent = '✕ Your passwords do not match';
  }
}

confirmPassword.addEventListener('input', () => {
  if (confirmPassword.validity.valid) {
    confirmPwError.classList.remove('invalid');
    confirmPwError.classList.add('valid');
    confirmPwError.textContent = '';
  } else {
    showConfirmPasswordError();
  }
});
