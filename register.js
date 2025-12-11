// ===== Registration form behaviour =====

let fullNameInput = document.getElementById("fullName");
let emailInput = document.getElementById("email");
let passInput = document.getElementById("password");
let repeatPassInput = document.getElementById("repeatPassword");

let nameErrorSpan = document.getElementById("nameError");
let passErrorSpan = document.getElementById("passError");

// ---------- Full name: focus / blur / validation ----------

// focus: blue border
fullNameInput.addEventListener("focus", function () {
  fullNameInput.style.border = "1px solid blue";
});


fullNameInput.addEventListener("blur", function () {
  fullNameInput.style.border = ""; 
  validateName();
});

function validateName() {
  let val = fullNameInput.value.trim();
  if (val.length <= 3) {
    nameErrorSpan.textContent = "invalid name";
    fullNameInput.style.backgroundColor = "lightgray";
    fullNameInput.focus();
    fullNameInput.select();

    return false;
  } else {
    nameErrorSpan.textContent = "";
    fullNameInput.style.backgroundColor = "white";
    return true;
  }
}

// ---------- Password & repeat password validation ----------

repeatPassInput.addEventListener("blur", function () {
  validatePasswords();
});

function validatePasswords() {
  let p1 = passInput.value;
  let p2 = repeatPassInput.value;

  // both required & must be identical
  if (p1 === "" || p2 === "" || p1 !== p2) {
    passErrorSpan.textContent =
      "password and repeat password should be the same";

    passInput.style.backgroundColor = "lightgray";
    repeatPassInput.style.backgroundColor = "lightgray";

    return false;
  } else {
    passErrorSpan.textContent = "";
    passInput.style.backgroundColor = "white";
    repeatPassInput.style.backgroundColor = "white";
    return true;
  }
}
emailInput.addEventListener("blur", function () {
  if (emailInput.validity.valid) {
    emailInput.style.backgroundColor = "white";
  } else {
    emailInput.style.backgroundColor = "lightgray";
  }
});
document.getElementById("regForm").addEventListener("submit", function (e) {
  validateName();
  validatePasswords();});
