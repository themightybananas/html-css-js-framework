let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const maxVisibleSlides = 6;

    // Ensure only 6 slides are visible
    slides.forEach((slide, i) => {
        if (i >= currentIndex && i < currentIndex + maxVisibleSlides) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    if (currentIndex === 1) {
        showSlide(currentIndex - 1);
    } else {
        showSlide(currentIndex + 1);
    }
}

function prevSlide() {
    if (currentIndex === 0) {
        showSlide(currentIndex); // Stay on the same slide
    } else {
        showSlide(currentIndex - 1);
    }
}

// Initial call to show the first set of slides
showSlide(currentIndex);
