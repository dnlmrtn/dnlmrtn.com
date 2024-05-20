document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach((carousel) => {
    const carouselInner = carousel.querySelector('.carousel-inner');
    const items = carouselInner.querySelectorAll('.carousel-item');
    const prevButton = carousel.previousElementSibling.querySelector('.prev');
    const nextButton = carousel.previousElementSibling.querySelector('.next');

    let index = 0;

    function getVisibleItems() {
      return window.innerWidth <= 768 ? 1 : 3;
    }

    let visibleItems = getVisibleItems();

    function updateCarousel() {
      const itemWidth = items[0].offsetWidth;
      carouselInner.style.transition = 'transform 0.5s ease-in-out';
      carouselInner.style.transform = `translateX(-${index * itemWidth}px)`;
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

    window.addEventListener('resize', () => {
      visibleItems = getVisibleItems();
      updateCarousel();
    });

    // Initial update
    updateCarousel();
  });
});

