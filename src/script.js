let lastScrollTop = 0;
const header = document.querySelector('.glass-header');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
        header.style.transition = 'transform 0.3s ease';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// JavaScript
document.getElementById('scroll-arrow').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el comportamiento por defecto del enlace
    document.getElementById('sobre-mi').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let currentIndex = 0;
    let interval;
    const autoPlayDelay = 5000; // Aumentado a 5 segundos

    items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });

    function moveToSlide(index) {
        track.style.transition = 'transform 0.7s ease-in-out';
        const slideWidth = items[0].offsetWidth;
        track.style.transform = `translateX(-${slideWidth * index}px)`;
        currentIndex = index;
    }

    function nextSlide() {
        if (currentIndex >= items.length - 1) {
            // Reset suave
            track.style.transition = 'none';
            currentIndex = 0;
            moveToSlide(currentIndex);
            setTimeout(() => {
                track.style.transition = 'transform 0.7s ease-in-out';
            }, 50);
        } else {
            currentIndex++;
            moveToSlide(currentIndex);
        }
    }

    function prevSlide() {
        if (currentIndex <= 0) {
            // Reset suave
            track.style.transition = 'none';
            currentIndex = items.length - 1;
            moveToSlide(currentIndex);
            setTimeout(() => {
                track.style.transition = 'transform 0.7s ease-in-out';
            }, 50);
        } else {
            currentIndex--;
            moveToSlide(currentIndex);
        }
    }

    function startAutoPlay() {
        stopAutoPlay(); // Evitar múltiples intervalos
        interval = setInterval(nextSlide, autoPlayDelay);
    }

    function stopAutoPlay() {
        if (interval) {
            clearInterval(interval);
        }
    }

    // Event Listeners
    prevButton.addEventListener('click', () => {
        stopAutoPlay();
        prevSlide();
        setTimeout(startAutoPlay, 5000); // Reiniciar después de 5 segundos
    });

    nextButton.addEventListener('click', () => {
        stopAutoPlay();
        nextSlide();
        setTimeout(startAutoPlay, 5000); // Reiniciar después de 5 segundos
    });

    // Iniciar autoplay
    startAutoPlay();
});

const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');

let currentIndex = 0;

function moveToSlide(index) {
    const amountToMove = -items[index].offsetWidth * index;
    track.style.transform = `translateX(${amountToMove}px)`;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    moveToSlide(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    moveToSlide(currentIndex);
});

function copyDiscord() {
    const discordTag = '_gabinus_';
    navigator.clipboard.writeText(discordTag).then(() => {
        const button = document.querySelector('.discord-btn');
        const originalText = button.querySelector('span').textContent;
        button.querySelector('span').textContent = '¡Copiado!';
        
        setTimeout(() => {
            button.querySelector('span').textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar:', err);
    });
}
