const hamburgerButton = document.querySelector('.hamburger');
const listElement = document.querySelector('.list');
const body = document.querySelector('body');

const addSlider = e => {
    listElement.classList.toggle('slide');
    hamburgerButton.classList.toggle('slide');
    e.stopPropagation();
}

const removeSlider = e => {
    listElement.classList.remove('slide');
    hamburgerButton.classList.remove('slide');
    e.stopPropagation();
}


hamburgerButton.addEventListener('click', addSlider);
body.addEventListener('click', removeSlider);



