let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateSlider() {
    const slidesContainer = document.querySelector('.slides-container');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Remove existing classes
    document.querySelectorAll('.img-container img').forEach(img => {
        img.classList.remove('current', 'previous');
    });

    // Get the current and previous images
    const images = slides[currentSlide].querySelectorAll('img');

    // Apply classes to images
    if (images.length > 1) {
        images[0].classList.add('current'); // Assuming the first image is the current one
        images[1].classList.add('previous'); // Assuming the second image is the previous one
    }
    
    // Update heading based on the current slide's data-heading attribute
    const currentSlideHeading = slides[currentSlide].getAttribute('data-heading');
    document.querySelector('.slider-heading').innerText = currentSlideHeading;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

// Initialize slider
updateSlider();
