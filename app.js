const btn = document.getElementById("submit-btn");
const name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");

const inputs = [name, last_name, email, password];
var numIP = inputs.length;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  var count = 0;
  inputs.forEach((ip) => {
    if (ip.value.length > 0) {
      count++;
      return true;
    } else ip.classList.add("error");
  });
  if (count == numIP) {
    form.submit();
  }
});

