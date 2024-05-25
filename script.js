document.addEventListener('DOMContentLoaded', () => {
  // -----Carousel Logic -----
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach((carousel) => {
    const carouselInner = carousel.querySelector('.carousel-inner');
    const items = carouselInner.querySelectorAll('.carousel-item');

    let index = 0;

    function updateCarousel() {
      const itemWidth = items[0].offsetWidth;
      carouselInner.style.transition = 'transform 0.5s ease-in-out';
      carouselInner.style.transform = `translateX(-${index * itemWidth}px)`;
    }

    carousel.previousElementSibling.querySelector('.prev').addEventListener('click', () => {
      if (index > 0) {
        index--;
        updateCarousel();
      }
    });

    carousel.previousElementSibling.querySelector('.next').addEventListener('click', () => {
      if (index < items.length - 1) {
        index++;
        updateCarousel();
      }
    });

    // Initial update
    updateCarousel();
  });

  // ----- Popup Logic -----
  const popups = document.querySelectorAll('.popup');

  // Add event listener to the close buttons of popups
  popups.forEach((popup) => {
    const closeButton = popup.querySelector('.popup-close');
    closeButton.addEventListener('click', () => {
      popup.style.display = 'none';
      document.body.classList.remove('blurred');
    });
  });

  // Add click event listener to each photo button
  const photoButtons = document.querySelectorAll('.photo-button');
  photoButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const popupId = button.dataset.popupId;
      const popup = document.querySelector(`[data-popup-id="${popupId}"]`);
      popup.style.display = 'flex';
      document.body.classList.add('blurred');
    });
  });
});

