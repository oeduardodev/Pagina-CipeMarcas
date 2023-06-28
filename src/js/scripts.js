

  function exibirTexto() {
    var textoAdicional = document.getElementById("texto-adicional");
    if (textoAdicional.style.display === "none") {
      textoAdicional.style.display = "block";
    } else {
      textoAdicional.style.display = "none";
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    function carousel(carouselContainerClass, carouselClass, velocity) {
      const carouselContainer = document.querySelector(carouselContainerClass);
      const carousel = document.querySelector(carouselClass);
  
      const containerWidth = carouselContainer.offsetWidth;
      const carouselWidth = carousel.offsetWidth;
  
      let position = 0;
  
      function animate() {
        position -= velocity;
  
        if (position < -carouselWidth) {
          position = 0;
        }
  
        carousel.style.transform = `translateX(${position}rem)`;
  
        requestAnimationFrame(animate);
      }
  
      animate();
    }

    carousel('.carousel-container', '.carousel', 0.8);
    carousel('.dep-carousel-container', '.dep-carousel', 0.02);

  });
  
  


