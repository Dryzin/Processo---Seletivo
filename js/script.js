document.addEventListener("DOMContentLoaded", function () {
  const slideContainer = document.querySelector(".slide-container");
  const carouselSlide = document.querySelector(".carousel-slide");
  const images = document.querySelectorAll(".carousel-slide img");
  const interval = 6000; // Intervalo de 6 segundos entre as imagens
  let currentIndex = 0;

  function nextSlide() {
    if (currentIndex < images.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlide();
  }

  function updateSlide() {
    const translateX = -currentIndex * 100 + "%";
    carouselSlide.style.transform = `translateX(${translateX})`;
  }

  setInterval(nextSlide, interval); // Alterna automaticamente entre as imagens

  updateSlide(); // Garante que a primeira imagem seja exibida corretamente

  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  const carouselContainer = document.querySelector(".carousel-container");
  const productList = document.querySelector(".product-list");

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

  nextButton.addEventListener("click", nextSlide);
});

// Função para mostrar o contador de produtos e o botão "Adicionar"
function showQuantityAndBuyButton(product) {
  const quantityElement = product.querySelector('.product-quantity');
  const buyButton = product.querySelector('.btn-buy');
  quantityElement.style.display = 'flex';
  buyButton.style.display = 'block';
}

// Função para ocultar o contador de produtos e o botão "Adicionar"
function hideQuantityAndBuyButton(product) {
  const quantityElement = product.querySelector('.product-quantity');
  const buyButton = product.querySelector('.btn-buy');
  quantityElement.style.display = 'none';
  buyButton.style.display = 'none';
}

// Função para expandir o produto
function expandProduct(product) {
  product.classList.add("expanded");
  showQuantityAndBuyButton(product);
}

// Função para diminuir o produto
function shrinkProduct(product) {
  product.classList.remove("expanded");
  hideQuantityAndBuyButton(product);
}

// Função para incrementar a quantidade de produtos
function incrementQuantity(button) {
  const quantityValue = button.parentNode.querySelector('.quantity-value');
  let quantity = parseInt(quantityValue.textContent);
  quantity++;
  quantityValue.textContent = quantity;
}

// Função para decrementar a quantidade de produtos
function decrementQuantity(button) {
  const quantityValue = button.parentNode.querySelector('.quantity-value');
  let quantity = parseInt(quantityValue.textContent);
  if (quantity > 0) {
      quantity--;
      quantityValue.textContent = quantity;
  }
}

// Adiciona eventos de mouseover e mouseout para cada produto
const productItems = document.querySelectorAll('.product-item');
productItems.forEach((productItem) => {
  productItem.addEventListener('mouseover', () => {
      expandProduct(productItem);
  });
  productItem.addEventListener('mouseout', () => {
      shrinkProduct(productItem);
  });
});

// SLIDE BOX
$(function () {
  $('.bxCarrosel').bxSlider({
    mode: 'horizontal',
    swipeThreshold: true,
    touchEnabled: true,
    oneToOneTouch: true,
    auto: true,
    controls: false,
    infiniteLoop: true,
    autoHover: true,
    slideWidth: 500,
    // slideMargin: 0,
    responsive: true,
    minSlides: 4,
    maxSlides: 4,
    shrinkItems: false,
    speed: 2000
  });
});
