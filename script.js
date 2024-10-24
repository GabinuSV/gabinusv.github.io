document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-inner');
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;

    // Mostrar la primera imagen
    images[0].classList.add('active');

    function nextImage() {
        // Remover clase previous de todas las imágenes
        images.forEach(img => img.classList.remove('previous'));
        
        // La imagen actual se convierte en previous
        images[currentIndex].classList.remove('active');
        images[currentIndex].classList.add('previous');
        
        // Actualizar el índice
        currentIndex = (currentIndex + 1) % images.length;
        
        // Activar la nueva imagen
        images[currentIndex].classList.add('active');
    }

    // Cambiar imagen cada 5 segundos
    setInterval(nextImage, 5000);
});