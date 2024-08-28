document.addEventListener('DOMContentLoaded', function() {
    const titles = document.querySelectorAll('#titles-container h3');
    const descriptions = document.querySelectorAll('#descriptions-container p');
    const images = document.querySelectorAll('.carousel img');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
 
    let currentIndex = 0;
 
    function updateSlider(index) {
       titles.forEach((title, i) => {
          title.classList.toggle('active', i === index);
       });
       descriptions.forEach((desc, i) => {
          desc.classList.toggle('active', i === index);
       });
       images.forEach((img, i) => {
          img.classList.remove('previous', 'current', 'next');
          if (i === index) {
             img.classList.add('current');
          } else if (i === (index + 1) % images.length) {
             img.classList.add('next');
          } else {
             img.classList.add('previous');
          }
       });
    }
 
    function goToNextSlide() {
       currentIndex = (currentIndex + 1) % titles.length;
       updateSlider(currentIndex);
    }
 
    function goToPreviousSlide() {
       currentIndex = (currentIndex - 1 + titles.length) % titles.length;
       updateSlider(currentIndex);
    }
 
    nextBtn.addEventListener('click', goToNextSlide);
    prevBtn.addEventListener('click', goToPreviousSlide);
 
    updateSlider(currentIndex); // Initialize the slider
 });
 