document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    const itemWidth = items[0].offsetWidth;
    const visibleItems = 3;
    let index = 0;

    function updateCarousel() {
        carousel.style.transition = 'transform 0.5s ease-in-out';
        carousel.style.transform = `translateX(-${index * itemWidth}px)`;
    }

    nextButton.addEventListener('click', () => {
        if (index < items.length - visibleItems) {
            index++;
            updateCarousel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    });

    // Reset transition after animation
    carousel.addEventListener('transitionend', () => {
        carousel.style.transition = '';
    });
});

