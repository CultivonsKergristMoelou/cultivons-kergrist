const track = document.querySelector('.carousel-track');
let scrollPos = 0;
const speed = 1; // px par frame

function scrollCarousel() {
    scrollPos += speed;
    if (scrollPos >= track.scrollWidth / 2) {
        scrollPos = 0;
    }
    track.scrollLeft = scrollPos;
    requestAnimationFrame(scrollCarousel);
}

scrollCarousel();