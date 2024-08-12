const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;
const totalSlides = Math.min(slides.length, 2); // Limit to the first two slides

function updateSliderPosition() {
    const slideWidth = slides[0].clientWidth; // Width of a single slide
    const offset = currentIndex * slideWidth; // Corrected offset calculation
    slider.style.transform = `translateX(-${offset}px)`;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    }
    updateSliderPosition();
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        // Go back to the first slide
        currentIndex = 0;
    }
    updateSliderPosition();
});

window.addEventListener('resize', updateSliderPosition);

// Initial position update
updateSliderPosition();
