"use strict";
const firstName = document.querySelector(".name"),
  email = document.querySelector(".email"),
  formSubmit = document.querySelector("form"),
  doc = document.querySelector(".doc"),
  btnRemove = document.querySelector(".remove"),
  textAlert = document.querySelector(".text-alert");

//  Correct typing
email.addEventListener("input", (e) => {
  email.value = email.value.toLowerCase();
});

// Add user
formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value == "" || firstName.value == "") {
    textAlert.textContent = "Pleace Write";
    btnRemove.classList.add("d-none");
    btnRemove.classList.remove("d-block");
  } else {
    btnRemove.classList.remove("d-none");
    btnRemove.classList.add("d-block");
    textAlert.textContent = "You signed in Successfully";
  }
  const user = {
    name: firstName.value,
    email: email.value,
  };

  e.target.reset();

  localStorage.setItem("user", JSON.stringify(user));
});
// get Item
const user = JSON.parse(localStorage.getItem("user"));
console.log(user);
doc.textContent = `${user.name}`;

// remove item
btnRemove.addEventListener("click", function () {
  localStorage.removeItem("user");
});
