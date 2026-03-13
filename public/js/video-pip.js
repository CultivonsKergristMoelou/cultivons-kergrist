
const pipVideo = document.getElementById("homeVideo");
const closeBtn = document.getElementById("close-video");
const pip = document.getElementById("pip-video");
const restoreBtn = document.getElementById("restore-label");


setTimeout(() => {
    pip.style.display = "block";
    pipVideo.play().catch(() => { }); // démarre muette
}, 2000);


const enablePipSound = (e) => {
    const interactiveTags = ['BUTTON', 'A', 'INPUT', 'VIDEO'];
    if (interactiveTags.includes(e.target.tagName)) return;

    pipVideo.muted = false;
    pipVideo.volume = 1;
    pip.classList.add("sound-on");   // retire l'indication "cliquer pour le son"
    document.removeEventListener('click', enablePipSound);
}

document.addEventListener('click', enablePipSound);

closeBtn.addEventListener("click", function (e) {
    e.stopPropagation();   // empêche le clic de remonter
    pip.classList.add("minimized");
    // couper le son en mini PIP
    video.muted = true;
});

restoreBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    pip.classList.remove("minimized");
    // remettre le son
    video.muted = false;
});

const overlay = document.getElementById('video-overlay');
const overlayVideo = document.getElementById('overlay-video');
const overlayClose = document.getElementById('overlay-close');
const overlayBg = document.getElementById('overlay-bg');

document.querySelectorAll('.vignette-item video').forEach(vignette => {
    vignette.addEventListener('click', () => {
        const src = vignette.querySelector('source').src;
        overlayVideo.src = src;
        overlayVideo.currentTime = 0;
        overlayVideo.play().catch(() => { }); // joue dès le clic
        overlay.style.display = 'flex';
    });
});

overlayClose.addEventListener('click', () => {
    overlayVideo.pause();
    overlay.style.display = 'none';
    overlayVideo.src = '';
});

// cliquer sur fond sombre ferme aussi
overlayBg.addEventListener('click', () => {
    overlayVideo.pause();
    overlay.style.display = 'none';
    overlayVideo.src = '';
});