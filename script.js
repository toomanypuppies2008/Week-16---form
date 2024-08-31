const form = document.forms.form;
const userNameInput = form.elements.name;
const emailInput = form.elements.email;
const ageInput = form.elements.age;
const sexOption = form.elements.sex;
const professionOption = form.elements.profession;
const termsOfUseCheckbox = form.elements.termsOfUse;
const submitButton = form.elements.submitButton;
const passwordInput = form.elements.password;
const passwordRepeat = form.elements.passwordRepeat;

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const professionError = document.getElementById("professionError");
const termsOfUseError = document.getElementById("termsOfUseError");
const ageError = document.getElementById("ageError");
const passwordError = document.getElementById("passwordError");
const passwordRepeatError = document.getElementById("passwordRepeatError");

function validateName(name) {
  let nameRegExp = /^[-a-zA-Zа-яА-ЯёЁ]{2,20}$/;
  return nameRegExp.test(name);
}

function validateEmail(email) {
  let emailRegExp =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,4})$/;
  return emailRegExp.test(email);
}

function validatePassword(password) {
  let passwordRegExp = /(?=.*[0-9])(?=.*[!@#$%^&*]){6,}/;
  return passwordRegExp.test(password);
}

termsOfUseCheckbox.addEventListener("change", function () {
  submitButton.disabled = !termsOfUseCheckbox.checked;
});

const allInputs = document.querySelectorAll(".focus");
allInputs.forEach((input) => {
  input.addEventListener("focus", function () {
    input.style.border = "2px solid #00ff00";
  });
  input.addEventListener("blur", function () {
    input.style.border = "";
  });
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let hasError = false;

  nameError.style.display = "none";
  emailError.style.display = "none";
  professionError.style.display = "none";
  ageError.style.display = "none";
  termsOfUseError.style.display = "none";
  passwordError.style.display = "none";
  passwordRepeatError.style.display = "none";

  if (
    userNameInput.value.trim() === "" ||
    validateName(userNameInput.value) === false
  ) {
    nameError.textContent = "Недопустимое имя пользователя";
    nameError.style.display = "block";
    hasError = true;
  }

  if (validateEmail(emailInput.value) === false) {
    emailError.textContent = "Пожалуйста,введите корректный email";
    emailError.style.display = "block";
    hasError = true;
  }

  if (ageInput.value === "") {
    ageError.textContent = "Необходимо указать возраст";
    ageError.style.display = "block";
    hasError = true;
  }

  if (professionOption.value === "none") {
    professionError.textContent = "Пожалуйста,выберите профессию";
    professionError.style.display = "block";
    hasError = true;
  }

  if (validatePassword(passwordInput.value) === false) {
    passwordError.textContent =
      "Пароль должен содержать хотя бы одну цифру и один спецсимвол (!@#$%^&*)";
    passwordError.style.display = "block";
    hasError = true;
  }

  if (passwordInput.value !== passwordRepeat.value) {
    passwordRepeatError.textContent = "Пароли не совпадают";
    passwordRepeatError.style.display = "block";
    hasError = true;
  }

  if (hasError === false) {
    alert("Ваша форма успешно отправлена!");
    console.log(
      userNameInput.value,
      emailInput.value,
      ageInput.value,
      sexOption.value,
      professionOption.value,
      passwordInput.value,
      passwordRepeat.value
    );
  }
});
