const button = document.getElementById("menu");
const mobilenav = document.getElementById("mobileNav");

mobilenav.style.display = "none";
button.style.opacity = 1;

button.addEventListener('click', () => {
    if (mobilenav.style.display === "none") {
        mobilenav.style.display = "block";
        button.style.opacity = 0.5;
    } else {
        mobilenav.style.display = "none";
        button.style.opacity = 1;
    }
});
