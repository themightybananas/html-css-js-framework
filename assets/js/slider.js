// WhatsApp js
window.addEventListener("scroll", function() {
    const footer = document.querySelector('footer');
    const whatsappIcon = document.getElementById('whatsapp-icon');
    const footerPosition = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
  
    // Show the icon when the footer section is in view
    if (footerPosition <= windowHeight) {
      whatsappIcon.style.display = 'block';
    } else {
      whatsappIcon.style.display = 'none';
    }
  });

  // Slick Carousel
  $('.slick-carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button class="slick-prev">&lt;</button>',
    nextArrow: '<button class="slick-next">&gt;</button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
  $('.your-carousel-class').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});
