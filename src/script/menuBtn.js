const menuBtn = document.getElementById("menuBtn");
const navBar = document.getElementById("navBar")

let activated = false

menuBtn.addEventListener("click", () => {
    activated = !activated;

    navBar.classList.toggle("active", activated);
    menuBtn.classList.toggle("active", activated);
});
