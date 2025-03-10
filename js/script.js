document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    initCarousel();
    cursor();
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

function initCarousel() {
    const track = document.querySelector('.about__img-track');
    const items = document.querySelectorAll('.about__img-container--left');
    const totalItems = items.length;
    let currentIndex = 0;

    // Duplicamos los nodos para hacer el efecto infinito
    items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });

    function moveCarousel() {
        currentIndex++;
        track.style.transform = `translateX(-${currentIndex * (items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight) * 2)}px)`;

        // Si llegamos al último elemento, reiniciamos la posición
        if (currentIndex >= totalItems) {
            setTimeout(() => {
                track.style.transition = 'none';
                currentIndex = 0;
                track.style.transform = `translateX(0)`;
                setTimeout(() => {
                    track.style.transition = 'transform 0.8s ease-in-out';
                }, 50);
            }, 800);
        }
    }

    setInterval(moveCarousel, 3000);
}

function cursor() {
    const cursor = document.querySelector('.cursor');

    // Captura la posición del mouse
    document.addEventListener('mousemove', (e) => {
        // Actualiza la posición del cursor
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
}