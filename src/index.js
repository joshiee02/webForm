const email = document.querySelector('#email');
const zip = document.querySelector('#zip');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const submitButton = document.querySelector('#submitButton');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
});

email.addEventListener('input', () => {
  const emailError = document.querySelector('#emailError');
  if (!email.validity.valid) {
    emailError.classList.remove('valid');
    emailError.classList.add('invalid');
    emailError.textContent = '✕ Please enter a valid email address';
  } else {
    emailError.classList.remove('invalid');
    emailError.classList.add('valid');
    emailError.textContent = '✓ Your email looks good!';
  }
});

zip.addEventListener('input', () => {
  const zipError = document.querySelector('#zipError');
  if (!zip.validity.valid) {
    zipError.classList.remove('valid');
    zipError.classList.add('invalid');
    zipError.textContent = '✕ Please enter a valid zip code';
  } else {
    zipError.classList.remove('invalid');
    zipError.classList.add('valid');
    zipError.textContent = '✓ Your zip code looks good!';
  }
});

password.addEventListener('input', () => {
  const pwError = document.querySelector('#pwError');
  if (!password.validity.valid) {
    pwError.classList.remove('valid');
    pwError.classList.add('invalid');
    pwError.textContent = '✕ Please enter a valid password';
  } else {
    pwError.classList.remove('invalid');
    pwError.classList.add('valid');
    pwError.textContent = '✓ Your password looks good!';
  }
});

confirmPassword.addEventListener('input', () => {
  const confirmPwError = document.querySelector('#confirm_pwError');
  if (password.value !== confirmPassword.value) {
    confirmPassword.style.border = '1px solid red';
    confirmPwError.classList.remove('valid');
    confirmPwError.classList.add('invalid');
    confirmPwError.textContent = '✕ Your password is not the same';
  } else {
    confirmPwError.classList.remove('invalid');
    confirmPassword.style.border = '1px solid green';
    confirmPwError.classList.add('valid');
    confirmPwError.textContent = '✓ Your password is the same!';
  }
});
