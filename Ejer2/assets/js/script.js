const pintar = function(color) {
    titulo.style.backgroundColor = color;
  }
   const titulo = document.getElementById("titulo")
   titulo.addEventListener("click", function() {
   pintar('yellow');
    });

