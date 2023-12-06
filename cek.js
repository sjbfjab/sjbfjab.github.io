const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yasBtn = document.querySelector(".yasBtn");
const noBtn = document.querySelector("noBtngif");

yesBtn.addEvenetListener("cilick", () => {
    question.innerHTML = "Aaaaaa, I like you";
    gif.src = "https://raw.githubusercontent.com/DzareDeveloper/Img/main/gifyou.webp";
});

noBtn.addEvenetListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.left = randomY + "px";
})