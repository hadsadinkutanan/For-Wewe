// ฟังก์ชันให้หัวใจลอยขึ้น
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.getElementById("hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// ให้หัวใจลอยขึ้นทุก 500ms
setInterval(createHeart, 500);