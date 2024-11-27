// Código para el navbar
document.addEventListener("DOMContentLoaded", function() {
    var toggler = document.getElementById("navbar-toggler");
    var togglerIcon = toggler.querySelector(".navbar-toggler-icon");
    var closeIcon = toggler.querySelector(".navbar-toggler-close-icon");

    toggler.addEventListener("click", function() {
        togglerIcon.classList.toggle("d-none");
        closeIcon.classList.toggle("d-none");
    });

    // Código para el año actual
    // Obtener el elemento donde se mostrará el año actual
    var currentYearElement = document.getElementById("currentYear");

    // Obtener el año actual
    var currentYear = new Date().getFullYear();

    // Asignar el año actual al contenido del elemento
    currentYearElement.textContent = currentYear;
});

// Código para loader
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar el elemento del loader
    var loader = document.getElementById("loader");

    // Función para ocultar el loader después de ciertos segundos (por ejemplo, 3 segundos)
    function hideLoader() {
        loader.style.display = "none"; // Ocultar el loader cambiando el estilo a "none"
    }

    // Llamar a la función hideLoader después de 
    setTimeout(hideLoader, 1300); // Ajustar el valor según sea necesario
});


// Código para el slider
  function mostrarImagen(index) {
    const galeria = document.getElementById('galeria');
    const imagenes = galeria.getElementsByTagName('img');

    for (let i = 0; i < imagenes.length; i++) {
      imagenes[i].style.opacity = 0;
    }

    imagenes[index].style.opacity = 1;
  }

  window.addEventListener('load',function() {
    const galeria = document.getElementById('galeria');
    const imagenes = galeria.getElementsByTagName('img');
    let index = 0;
    const intervalo = 3000;
    
    function cambiarImagen() {
      imagenes[index].style.opacity = 0;
      index = (index + 1) % imagenes.length;
      imagenes[index].style.opacity = 1;
    }
    function iniciarGaleria(){
      imagenes[index].style.opacity = 1;
      setInterval(cambiarImagen, intervalo);
    }
    if (imagenes.length > 0){
      for (let i = 0; i < imagenes.length; i++){
        imagenes[i].style.opacity = 0;
      }
      iniciarGaleria();
    }

    });

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js',new Date());
    gtag('config', 'AW-11210846520');
      const footer = document.querySelector('footer');
      const iconos = footer.querySelectorAll('.redes-container a');

      iconos.forEach((icono) => {
        icono.addEventListener('mouseover', () => {
          iconos.forEach((otherIcono) => {
            if (otherIcono !== icono) {
              otherIcono.classList.toggle('desenfocado', true);
            }
          });
          icono.classList.toggle('no-escala', true);
        });

        icono.addEventListener('mouseout', () => {
          iconos.forEach((otherIcono) => {
            otherIcono.classList.toggle('desenfocado', false);
          });
          icono.classList.toggle('no-escala', false);
        });
      });


// Código para título de kinder
document.addEventListener('DOMContentLoaded', () => {
    const text = document.getElementById('animated-text');
    const letters = text.innerText.split('');
    text.innerHTML = letters.map(letter => `<span class="letter">${letter}</span>`).join('');

    const letterElements = document.querySelectorAll('.letter');
    letterElements.forEach((letter, index) => {
        letter.style.animation = `bounceIn 0.6s ease forwards ${index * 0.1}s`;
    });
});

// Código para mover el caracol
window.addEventListener('load', function() {
    const imagenCalcomania = document.getElementById('imagen-calcomania3');
    const navbar = document.getElementById('barra-navegacion'); // Asegúrate de que este ID corresponda a tu barra de navegación
    let position = 0;
    const step = 2; // Ajusta el valor de paso según tus necesidades
    const interval = 60; // Ajusta el intervalo de tiempo entre cada paso
    
    function moveImage() {
        const imageWidth = imagenCalcomania.offsetWidth;
        const screenWidth = window.innerWidth;
        const navbarPosition = navbar.getBoundingClientRect().left;
      
        position += step;
        imagenCalcomania.style.left = position + 'px';
      
        if (position >= screenWidth - navbarPosition - imageWidth) {
            position = -imageWidth; // Reinicia la posición de la imagen
        }
    }
    
    setInterval(moveImage, interval);
});