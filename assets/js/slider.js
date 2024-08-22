


document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSliderPosition() {
        if (window.innerWidth >= 768) {
            const slideWidth = slides[0].clientWidth; // Width of a single slide
            const offset = currentIndex * slideWidth;
            slider.style.transform = `translateX(-${offset}px)`;
        }
    }

    if (prevBtn && nextBtn) {
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
    }

    // Handle mouse and touch events for dragging
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        if (window.innerWidth >= 768) { // Only apply dragging on larger screens
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        }
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown || window.innerWidth < 768) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; // Adjusted scroll speed
        slider.scrollLeft = scrollLeft - walk;
    });

    slider.addEventListener('touchstart', (e) => {
        if (window.innerWidth >= 768) { // Only apply touch dragging on larger screens
            isDown = true;
            startX = e.touches[0].pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        }
    });

    slider.addEventListener('touchend', () => {
        isDown = false;
    });

    slider.addEventListener('touchmove', (e) => {
        if (!isDown || window.innerWidth < 768) return;
        const x = e.touches[0].pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; // Adjusted scroll speed
        slider.scrollLeft = scrollLeft - walk;
    });
});
