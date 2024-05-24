document.addEventListener('DOMContentLoaded', () => {
  // -----Carousel Logic -----
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

  // ----- Popup Logic -----
  const popups = document.querySelectorAll('.popup');
  const photoButtons = document.querySelectorAll('.photo-button');

  // Add click event listener to each photo button
  photoButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Get the associated popup ID from the button's data attribute
      const popupId = button.dataset.popupId;

      // Find the corresponding popup element
      const popup = document.querySelector(`[data-popup-id="${popupId}"]`);

      // Show the popup
      popup.style.display = 'flex';
      document.body.classList.add('blurred');
    });
  });

  // Add event listener to the close button to hide the popup
  popups.forEach((popup) => {
    const closeButton = popup.querySelector('.close');
    closeButton.addEventListener('click', () => {
      popup.style.display = 'none';
      document.body.classList.remove('blurred');
    });
  });
});

