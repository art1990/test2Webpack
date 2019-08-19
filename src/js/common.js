
const btnFind = document.getElementsByClassName("main__btn_find")[0];
const inputFind = document.getElementsByClassName("main__input_find")[0];
const mainFind  = document.getElementsByClassName("main__form_find")[0]

mainFind.addEventListener("mouseover", ({target})=> {
        inputFind.classList.remove("hidden")
})

mainFind.addEventListener("mouseout", ()=> {
        inputFind.classList.add("hidden")
})

const allComment = document.getElementsByClassName("all_comments")[0];
const user1 = allComment.querySelector(".article_user1");
const user2 = allComment.querySelector(".article_user2");
for (let i = 0; i < 4; i++) {
    let copyComment;
    if(i === 2) {copyComment = user2.cloneNode(true);
    }else{
        copyComment = user1.cloneNode(true)
    }
    allComment.appendChild(copyComment)
}

let count = 2;
window.setInterval(() => {
        count = count%4? count: 1;
     document.body.style.backgroundImage = `url(/assets/img/slider/slide${count}.png)`;
     count++
 }, 10000);