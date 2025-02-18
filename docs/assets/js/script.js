// Puedes añadir interactividad aquí, como un carrusel de imágenes o animaciones.
document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo de interactividad: Cambiar el color de fondo del header al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#555';
        } else {
            header.style.backgroundColor = '#333';
        }
    });
});