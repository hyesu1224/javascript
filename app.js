const title = document.querySelector("div.hello:first-child h1");
function handleTitleClick() {
    console.log("title was clicked!");
    title.style.color="blue";
}

console.dir(title);
console.log(title);

title.addEventListener("click", handleTitleClick);
title.style.color="pink"