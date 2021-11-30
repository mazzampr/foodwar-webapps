class TopMenu extends HTMLElement {
    constructor() {
        super();
        this.menus = [
            {
                "title": "Pindang Goreng",
                "image": "https:\/\/www.themealdb.com\/images\/media\/meals\/nv5lf31628771380.jpg"
            },
            {
                "title": "Kentucky",
                "image": "https:\/\/www.themealdb.com\/images\/media\/meals\/xqusqy1487348868.jpg"
            },
            {
                "title": "Moussaka",
                "image": "https:\/\/www.themealdb.com\/images\/media\/meals\/ctg8jd1585563097.jpg"
            },
            {
                "title": "Read Peas Soup",
                "image": "https:\/\/www.themealdb.com\/images\/media\/meals\/sqpqtp1515365614.jpg"
            }
        ];
    }
    connectedCallback()  {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="info__content">
                <h2 id="bestMenu" class="title__content" tabindex="0">
                    BEST MENUS
                </h2>
                <p class="description__content" tabindex="0">
                    Best menus in this month
                </p>
                <div class="list__menu">${this._topMenu(this.menus)}</div>
            </div>
        `;
    }

    _topMenu(menus) {
        let listItem = '';
        for(let menu of menus){
            listItem += `
                <div class="list__item" tabindex="0">
                    <img src="${menu.image}" width="250px"
                        alt="${menu.title}">
                    <h3 class="title__item" tabindex="0">${menu.title}</h3>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
            `;
        }
        return listItem;
    }
}

customElements.define('top-menus', TopMenu);