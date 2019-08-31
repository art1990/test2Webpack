const btnFind = document.querySelector(".main__btn_find");
const inputFind = document.querySelector(".main__input_find");
const mainFind = document.querySelector(".main__form_find");
const header = document.querySelector(".header");
const btnCall = document.querySelector(".header__call");

mainFind.addEventListener("mouseover", ({ target }) => {
  inputFind.classList.remove("hidden");
});

mainFind.addEventListener("mouseout", () => {
  inputFind.classList.add("hidden");
});

const allComment = document.querySelector(".all_comments");
const user1 = allComment.querySelector(".article_user1");
const user2 = allComment.querySelector(".article_user2");
for (let i = 0; i < 4; i++) {
  let copyComment;
  if (i === 2) {
    copyComment = user2.cloneNode(true);
  } else {
    copyComment = user1.cloneNode(true);
  }
  allComment.appendChild(copyComment);
}

let count = 2;
window.setInterval(() => {
  count = count % 4 ? count : 1;
  document.body.style.backgroundImage = `linear-gradient(to top, rgba(23, 49, 83, 0.35), rgba(23, 49, 83, 0.35)),url(/assets/img/slider/slide${count}.png)`;
  count++;
}, 10000);


window.onscroll = () => {
  if(window.pageYOffset > 1){
    header.classList.add("header__white");
    btnCall.textContent = "Call +48 567 365 485"
  }else{ 
    header.classList.remove("header__white");
    btnCall.textContent = "CALL US"
  }};