document.addEventListener('DOMContentLoaded', () => {
    initMenu();
});


function initMenu() {
    const bars = document.querySelector('#nav__bars');
    const links = document.querySelector('#nav__list');

    bars.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita que el evento se propague al documento
        links.classList.toggle('show');
        console.log('abierto');
    });

    document.addEventListener('click', (event) => {
        if (!links.contains(event.target) && !bars.contains(event.target)) {
            links.classList.remove('show');
            console.log('cerrado');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.querySelector('.about__img-container');
    const carouselItems = document.querySelectorAll('.about__img-container--left');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselItems.forEach(item => {
            item.style.transform = `translateX(${offset}%)`;
        });
    }

    function showNextItem() {
        if (currentIndex < carouselItems.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
            carouselItems.forEach(item => {
                item.classList.add('about__img-container--no-transition');
                item.style.transform = `translateX(${100}%)`;
            });
            setTimeout(() => {
                carouselItems.forEach(item => {
                    item.classList.remove('about__img-container--no-transition');
                    updateCarousel();
                });
            }, 50); // Espera un poco antes de quitar la clase
            return;
        }
        updateCarousel();
    }

    setInterval(showNextItem, 3000); // Cambia de imagen cada 3 segundos

    updateCarousel();
});