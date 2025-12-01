// script.js
// Asegura que todo el código se ejecute después de que el HTML esté cargado

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================
    // 1. Funcionalidad de Menú Desplegable 
    // ==========================================================

    const itemDestinos = document.getElementById('item-desplegable-destinos');
    const subMenuDestinos = document.getElementById('submenu-oculto-destinos');
    const itemCultura = document.getElementById('item-desplegable-cultura');
    const submenuCultura = document.getElementById('submenu-oculto-cultura');

    // Lógica para Destinos
    if (itemDestinos && subMenuDestinos) {
        itemDestinos.addEventListener('mouseover', () => {
            subMenuDestinos.style.display = 'block';
        });

        itemDestinos.addEventListener('mouseout', () => {
            subMenuDestinos.style.display = 'none';
        });

        // Asegura que el submenú se mantenga visible si el ratón pasa al submenú
        subMenuDestinos.addEventListener('mouseover', () => {
            subMenuDestinos.style.display = 'block';
        });
        subMenuDestinos.addEventListener('mouseout', () => {
            subMenuDestinos.style.display = 'none';
        });
    }

    // Lógica para Cultura
    if (itemCultura && submenuCultura) {
        itemCultura.addEventListener('mouseover', () => {
            submenuCultura.style.display = 'block';
        });

        itemCultura.addEventListener('mouseout', () => {
            submenuCultura.style.display = 'none';
        });

        // Asegura que el submenú se mantenga visible si el ratón pasa al submenú
        submenuCultura.addEventListener('mouseover', () => {
            submenuCultura.style.display = 'block';
        });
        submenuCultura.addEventListener('mouseout', () => {
            submenuCultura.style.display = 'none';
        });
    }


    // ==========================================================
    // 2. Funcionalidad de Mensaje Personalizado 
    // ==========================================================

    const contenedorMensaje = document.getElementById('mensaje-bienvenida');

    if (contenedorMensaje) {
        const hora = new Date().getHours();
        let mensaje;

        if (hora >= 5 && hora < 12) {
            mensaje = "¡Buenos días! Es hora de planear tu viaje.";
        } else if (hora >= 12 && hora < 19) {
            mensaje = "¡Buenas tardes! Explora nuestros destinos.";
        } else {
            mensaje = "¡Buenas noches! Relájate y sueña con tu próxima aventura."; 
        }

        contenedorMensaje.innerHTML = `<p class="saludo">${mensaje}</p>`;
    }
    
    // ==========================================================
    // 3. Funcionalidad de Slider de Imágenes 
    // ==========================================================
    
    // 1. Array con las rutas de las imágenes (RUTAS CORREGIDAS A RELATIVAS sin '/')
    const images = [ 
        'imagenes/venecia.jpg',
        'imagenes/R (2).jpg',
        'imagenes/Comida-italiana-1280-x-628-px.jpg'
    ];
    
    let currentImageIndex = 0;
    const sliderContainer = document.getElementById('slider-images');
    
    if (sliderContainer) {
        
        // Función principal para renderizar la imagen y los controles
        const updateSlider = () => {
            sliderContainer.innerHTML = `
                <img src="${images[currentImageIndex]}" alt="Imagen de Italia ${currentImageIndex + 1}" class="slider-image">
                <button class="slider-control prev"> &lt; </button>
                <button class="slider-control next"> &gt; </button>
            `;
            
            // Reasignar eventos a los nuevos botones
            document.querySelector('.slider-control.prev').addEventListener('click', () => {
                currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
                updateSlider();
            });

            document.querySelector('.slider-control.next').addEventListener('click', () => {
                currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
                updateSlider();
            });
        };

        // Inicializar el slider
        updateSlider();

        // 2. Transición automática (Cambia la imagen cada 4 segundos)
        setInterval(() => {
            currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
            updateSlider();
        }, 4000);
    }
    
});