const popup = document.getElementById("popupVideo");
const close = document.querySelector(".video-close");
const video = document.getElementById("videoCampagne");

window.addEventListener("load", () => {

    if (!sessionStorage.getItem("videoSeen")) {
        popup.classList.remove("hidden");
        video.play();
        sessionStorage.setItem("videoSeen", "true");
    }

});

close.addEventListener("click", () => {
    popup.classList.add("hidden");
    video.pause();
});