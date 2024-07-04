import { DATA } from "../server/db.js";
const headerStatus = document.querySelector(".header__avatar");
const content = document.querySelector(".content");
const contentImage = document.querySelector(".content__image");
const form = document.querySelector(".form");
const input = document.querySelector(".input");

contentImage.addEventListener("click", () => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  contentImage.style.display = "none";

  let div = document.createElement("div");
  div.className = "image my-message";
  div.innerHTML = `
    <img src="./images/hello.png" alt="">
    <span>${hour}:${minute}</span>
  `;
  content.appendChild(div);
  content.scrollTop = content.scrollHeight;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let val = input.value;
  console.log(val);
  if (val.trim() === "") return null;

  contentImage.style.display = "none";

  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();

  let div = document.createElement("div");
  div.className = "message my-message";
  div.innerHTML = `
    <p>${val}</p>
    <span>${hour}:${minute}</span>
  `;

  content.appendChild(div);
  input.value = "";
  content.scrollTop = content.scrollHeight;
  partnerSendMessage();
});

function partnerSendMessage() {
  let secund = Math.floor(Math.random() * 10000);
  setTimeout(() => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();

    let index = Math.floor(Math.random() * DATA.length);
    let div = document.createElement("div");
    div.className = "message";
    div.innerHTML = `
      <p>${DATA[index]}</p>
      <span>${hour}:${minute}</span>
    `;
    content.appendChild(div);
    content.scrollTop = content.scrollHeight;
  }, secund);
}
