let slideIndex = 0;

function showSlides() {
  const slides = document.querySelector('.carousel-slide');
  const slideWidth = slides.clientWidth / 3; // Each image is 1/3 of the total width

  slides.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
  
  slideIndex++;
  if (slideIndex >= 3) slideIndex = 0; // Loop back to the start after the last image
}

setInterval(showSlides, 3000); // Change image every 3 seconds
