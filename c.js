document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
  });

  function validateForm() {
    clearErrors();
    let isValid = true;

    if (nameInput.value.trim() === '') {
      isValid = false;
      showError('name', 'Please enter your name');
    }

    if (!isValidEmail(emailInput.value.trim())) {
      isValid = false;
      showError('email', 'Please enter a valid email address');
    }

    if (messageInput.value.trim() === '') {
      isValid = false;
      showError('message', 'Please enter your message');
    }

    if (isValid) {
      // Form submission logic goes here
      alert('Form submitted successfully!');
      form.reset();
    }
  }

  function showError(inputName, errorMessage) {
    const errorElement = document.getElementById(inputName + '-error');
    errorElement.textContent = errorMessage;
  }

  function clearErrors() {
    document.querySelectorAll('.error-message').forEach(function (element) {
      element.textContent = '';
    });
  }

  function isValidEmail(email) {
    // Regular expression for validating email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
