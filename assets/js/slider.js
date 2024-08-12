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


  document.addEventListener('DOMContentLoaded', function () {
    const cardsContainer = document.querySelector('.cards');
    
    let startX;
    let scrollLeft;
    
    cardsContainer.addEventListener('mousedown', (e) => {
      startX = e.pageX - cardsContainer.offsetLeft;
      scrollLeft = cardsContainer.scrollLeft;
      cardsContainer.classList.add('active');
    });
    
    cardsContainer.addEventListener('mouseleave', () => {
      cardsContainer.classList.remove('active');
    });
    
    cardsContainer.addEventListener('mouseup', () => {
      cardsContainer.classList.remove('active');
    });
    
    cardsContainer.addEventListener('mousemove', (e) => {
      if (!cardsContainer.classList.contains('active')) return;
      e.preventDefault();
      const x = e.pageX - cardsContainer.offsetLeft;
      const walk = (x - startX) * 2; // scroll-fast
      cardsContainer.scrollLeft = scrollLeft - walk;
    });
    
    // Optional: Swipe functionality on touch devices
    cardsContainer.addEventListener('touchstart', (e) => {
      startX = e.touches[0].pageX - cardsContainer.offsetLeft;
      scrollLeft = cardsContainer.scrollLeft;
    });
    
    cardsContainer.addEventListener('touchmove', (e) => {
      const x = e.touches[0].pageX - cardsContainer.offsetLeft;
      const walk = (x - startX) * 2; // scroll-fast
      cardsContainer.scrollLeft = scrollLeft - walk;
    });
  });

