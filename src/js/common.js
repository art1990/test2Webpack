document.getElementsByClassName("main__btn_find")[0].onmouseover = ({target}) => {
    const input = document.getElementsByClassName("main__input_find")[0]
    input.style.display = "inline-block";
    target.onmouseout = () => {
        input.style.display = "none"
    }
};

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

// let count = 2;
// window.setInterval(() => {
//     count = count%4;
//     if(count) {
//     document.body.style.backgroundImage = `url(/assets/img/slider/slide${count}.png)`;}
//     count++
// }, 10000);