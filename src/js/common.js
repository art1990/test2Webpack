(() => {const btnFind = document.querySelector(".main__btn_find");
const inputFind = document.querySelector(".main__input_find");
const mainFind = document.querySelector(".main__form_find");
const header = document.querySelector(".header");
const headerMenu = document.querySelector(".header__menu");
const btnCall = document.querySelector(".header__call");
const headerMenuItem = header.querySelectorAll("li")

computedStyle = function(vElement) {
  return window.getComputedStyle
         ?window.getComputedStyle(vElement,null)
         :vElement.currentStyle; 
}

isVisible = function(vElement) {
  return !(vElement.offsetWidth == 0 && vElement.offsetHeight == 0)
         && computedStyle(vElement).visibility != "hidden";  
}


const removeHidden = ({ target }) => {
  inputFind.classList.remove("hidden");
}

const addHidden =  () => {
  inputFind.classList.add("hidden");
}

const addVisible = ({target}) => {
    if(!target.classList.contains("header")) {return}
    if (isVisible(headerMenu)) {
      headerMenu.classList.add("menu-visible")
      ;
  }
}

const removeVisible = () => {
  if (isVisible(headerMenu)) {
    headerMenu.classList.remove("menu-visible")
    ;
  }
}

const onScroll = () => {
  if (window.pageYOffset > 1) {
    header.classList.add("header__white");
    btnCall.textContent = "Call +48 567 365 485";
  } else {
    header.classList.remove("header__white");
    btnCall.textContent = "CALL US";
  }
}

const addMenuHidden = () => {
  headerMenu.classList.add("menu-hidden")
  setTimeout(() => {
    headerMenu.classList.remove("menu-hidden")
  }, 200)
}

window.addEventListener("scroll", onScroll)
header.addEventListener("mouseout", removeVisible) 
mainFind.addEventListener("mouseover", removeHidden);
mainFind.addEventListener("mouseout", addHidden);
header.addEventListener("mouseover", addVisible);
headerMenuItem.forEach(elem => elem.addEventListener("click", addMenuHidden));
 
const allComment = document.querySelector(".all_comments");
const user1 = allComment.querySelector(".article_user1");
const user2 = allComment.querySelector(".article_user2");
for (let i = 0; i < 4; i++) {
  let copyComment;
  copyComment = i === 2? user2.cloneNode(true): user1.cloneNode(true);
  allComment.appendChild(copyComment);
}

let count = 2;
window.setInterval(() => {
  count = count % 4 ? count : 1;
  document.body.style.backgroundImage = `linear-gradient(to top, rgba(23, 49, 83, 0.35), rgba(23, 49, 83, 0.35)),url(./assets/img/slider/slide${count}.svg)`;
  count++;
}, 60000);

})()