//funcion cambio de margen
const clickableImage = document.getElementById("clickimage");
if (clickableImage !== null) {
    clickableImage.addEventListener("click", function() {
        this.classList.toggle("clicked");
    });
}
//funcion de pasword
document.addEventListener("DOMContentLoaded", function () {
    const select1 = document.getElementById('sel1');
    const select2 = document.getElementById('sel2');
    const select3 = document.getElementById('sel3');
    const ingresarButton = document.getElementById('ingresar');
    const resultadoParrafo = document.getElementById('resultado');

    ingresarButton.addEventListener('click', verificarPassword);

    function verificarPassword() {
        const password = select1.value + select2.value + select3.value;
        
        if (password === '911') {
            resultadoParrafo.textContent = 'Contraseña 1 correcta';
        } else if (password === '714') {
            resultadoParrafo.textContent = 'Contraseña 2 correcta';
        } else {
            resultadoParrafo.textContent = 'Contraseña incorrecta';
        }
    }


});


//funcion de evaluar sticker
document.getElementById("evaluar").addEventListener("click", calcularStickers);

function calcularStickers() {
  var cantidadSticker1 = parseInt(document.getElementById("sticker1").value);
  var cantidadSticker2 = parseInt(document.getElementById("sticker2").value);
  var cantidadSticker3 = parseInt(document.getElementById("sticker3").value);

  var totalStickers = cantidadSticker1 + cantidadSticker2 + cantidadSticker3;

  if (totalStickers <= 10) {
    document.getElementById("total").textContent = "Llevas " + totalStickers + " stickers";
  } else {
    document.getElementById("total").textContent = "Llevas demasiados stickers " + totalStickers + " solo puedes llevar menos de 10";
  }
}



