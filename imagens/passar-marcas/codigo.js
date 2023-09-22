document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    const carouselContainer = document.querySelector(".carousel-container");
    const productList = document.querySelector(".product-list");
  
    let currentIndex = 0;
    const itemsPerPage = 4;
  
    prevButton.addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex -= itemsPerPage;
        updateCarousel();
      }
    });
  
    nextButton.addEventListener("click", function () {
      if (currentIndex < productList.children.length - itemsPerPage) {
        currentIndex += itemsPerPage;
        updateCarousel();
      }
    });
  
    function updateCarousel() {
      const translateX = -currentIndex * (100 / itemsPerPage) + "%";
      productList.style.transform = `translateX(${translateX})`;
    }

    updateSlide(); // Para garantir que a primeira imagem seja exibida

    nextButton.addEventListener("click", nextSlide);

  });