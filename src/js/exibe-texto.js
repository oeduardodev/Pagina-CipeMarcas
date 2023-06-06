

  function exibirTexto() {
    var textoAdicional = document.getElementById("texto-adicional");
    if (textoAdicional.style.display === "none") {
      textoAdicional.style.display = "block";
    } else {
      textoAdicional.style.display = "none";
    }
  }
