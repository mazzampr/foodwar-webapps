import {restaurants} from '../DATA.json';

const listRestoElement = document.querySelector('.list__resto');

listRestoElement.innerHTML = "";
for(let resto of restaurants) {
    listRestoElement.innerHTML += `
                <div class="resto__item card" tabindex="0">
                    <img class="img" src="${resto.pictureId}"
                        width="250px" alt="${resto.name}">
                    <h3 class="title__resto" tabindex="0">${resto.name}</h3>
                    <p class="description">Our Best Restaurant</p>
                    <div class="location">
                        <i class="fas fa-map-marker-alt"></i>
                        <p tabindex="0">${resto.city}</p>
                    </div>
                    <div class="rating__resto">
                        <div class="gap">
                            <span><i class="fas fa-star"></i></span>
                            <p>${resto.rating}</p>
                        </div>
                    </div>
                </div>`;
}
