const menuBtn = document.getElementById("menuBtn");
const navBar = document.getElementById("navBar");
const btnTheme = document.getElementById("btnTheme");

let activated = false

menuBtn.addEventListener("click", () => {
    activated = !activated;

    navBar.classList.toggle("active", activated);
    menuBtn.classList.toggle("active", activated);
});


btnTheme.addEventListener("click", () => {
    activated = !activated;

    document.documentElement.dataset.theme =
        activated ? "light" : "dark";

    btnTheme.classList.toggle("fa-sun", !activated);
    btnTheme.classList.toggle("fa-moon", activated);

        const images = document.querySelectorAll("img");

    images.forEach((img) => {
        if (activated) {
            img.src = img.src
                .replace("logo.png", "logo-dark.png")
                .replace("logotipo.png", "logotipo-dark.png");
        } else {
            img.src = img.src
                .replace("logo-dark.png", "logo.png")
                .replace("logotipo-dark.png", "logotipo.png");
        }
    });
});

const copyEmail = document.getElementById("copyEmail");

copyEmail.addEventListener("click",()=>{
    const email = "seuemail@gmail.com";

    navigator.clipboard.writeText(email)
        .then(() => {
            alert("E-mail copiado!");
        })
        .catch(() => {
            alert("Não foi possível copiar o e-mail.");
        });
})