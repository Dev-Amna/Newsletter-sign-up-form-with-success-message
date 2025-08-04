document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const submitBtn = document.querySelector('.submit-btn');
  const sectionOne = document.querySelector('.container');
  const sectionTwo = document.querySelector('.section-two');

  // Create error message span
  const errorMsg = document.createElement('span');
  errorMsg.textContent = 'Valid email required';
  errorMsg.style.color = 'red';
  errorMsg.style.fontSize = '0.8rem';
  errorMsg.style.marginTop = '5px';
  errorMsg.style.display = 'none';
  emailInput.parentElement.appendChild(errorMsg);

  // Email validation function
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Click handler
  submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const emailValue = emailInput.value.trim();

    if (emailValue === '' || !isValidEmail(emailValue)) {
      emailInput.style.border = '1px solid red';
      errorMsg.style.display = 'block';
    } else {
      emailInput.style.border = '1px solid green';
      errorMsg.style.display = 'none';
      sectionOne.style.display = 'none';
      sectionTwo.style.display = 'flex';
    }
  });

  // Dismiss success message
  const dismissBtn = document.getElementById('dismissBtn');
  dismissBtn.addEventListener('click', function () {
    sectionTwo.style.display = 'none';
    sectionOne.style.display = 'flex';
    emailInput.value = '';
    emailInput.style.border = '1px solid hsl(231, 7%, 60%)';
  });
});
