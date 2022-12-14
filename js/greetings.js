const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input:nth-child(1)");
const greeting = document.querySelector("#greeting");
const afterLoginBlock = document.querySelector(".afterlogin");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}`;
  afterLoginBlock.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  paintGreetings(savedUsername);
}
