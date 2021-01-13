// selecting all the form inputs
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('password-check');

form.addEventListener('submit' , e => {
  // preventing the page from reloading when submitting the form
  e.preventDefault();

  validateInputs();
});

//validating all the inputs
function validateInputs() {

  // getting and removing whitespaces from the values
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordcheckValue = passwordCheck.value.trim();

  // validating the username
  if (usernameValue == '') {
    setErrorFor(username, 'Please fill in your username');
  } else {
    setSuccessFor(username);
  }

  //validating the email
  if (emailValue == '') {
    setErrorFor(email, 'Please fill in your email');
  } else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
  } else {
    setSuccessFor(email);
  }

  //validating the first password
  if (passwordValue == '') {
    setErrorFor(password, 'Please fill in your password');
  } else {
    setSuccessFor(password);
  }

  //validating and comparing the second password with the first
  if (passwordcheckValue == '') {
    setErrorFor(passwordCheck, 'Please fill in your password');
  } else if (passwordcheckValue !== passwordValue) {
    setErrorFor(passwordCheck, 'Passwords do not match');
  } else {
    setSuccessFor(passwordCheck);
  }

}

//functions for changing the input colors depending on validity
function setErrorFor(input, message) {
  const inputSelected = input.parentElement;
  const errorMessage = inputSelected.querySelector('small');

  inputSelected.className = 'form-control failure';
  errorMessage.textContent = message;

}

function setSuccessFor(input) {
  const inputSelected = input.parentElement;
  inputSelected.className = 'form-control success';
}


function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
