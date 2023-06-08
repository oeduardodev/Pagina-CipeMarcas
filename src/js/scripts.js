

  function exibirTexto() {
    var textoAdicional = document.getElementById("texto-adicional");
    if (textoAdicional.style.display === "none") {
      textoAdicional.style.display = "block";
    } else {
      textoAdicional.style.display = "none";
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    function carousel() {
      const carouselContainer = document.querySelector('.carousel-container');
      const carousel = document.querySelector('.carousel');

      const containerWidth = carouselContainer.offsetWidth;
      const carouselWidth = carousel.offsetWidth;

      let position = 0;
      let velocity = .80;

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

    carousel();
  });