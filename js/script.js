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