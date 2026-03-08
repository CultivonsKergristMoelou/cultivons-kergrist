
document.addEventListener("DOMContentLoaded", () => {

    const liste = document.querySelector(".liste-candidats");

    if (!liste) return;
    const popup = document.querySelector(".popup");
    const popupBox = document.querySelector(".popup-box");
    const closeBtn = document.querySelector(".popup-close");

    const title = document.querySelector(".popup-title");
    const text = document.querySelector(".popup-text");
    const img = document.querySelector(".popup-img");

    const triggers = document.querySelectorAll(".bloc-click");

    triggers.forEach(card => {

        card.addEventListener("click", () => {

            title.textContent = card.dataset.title;
            text.textContent = card.dataset.text;

            img.src = card.dataset.img;
            img.alt = card.dataset.title;

            popup.classList.remove("popup-hidden");

        });

    });

    /* fermeture croix */

    closeBtn.addEventListener("click", () => {
        popup.classList.add("popup-hidden");
    });

    /* fermeture clic extérieur */

    popup.addEventListener("click", (e) => {

        if (!popupBox.contains(e.target)) {
            popup.classList.add("popup-hidden");
        }

    });

    /* fermeture clic image (mobile demandé) */

    img.addEventListener("click", () => {
        popup.classList.add("popup-hidden");
    });

});