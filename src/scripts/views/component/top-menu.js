class TopMenu extends HTMLElement {
  constructor() {
    super();
    this.menus = [
      {
        title: 'Pindang Goreng',
        image: './images/top-menus/pindang.jpg',
      },
      {
        title: 'Kentucky',
        image: './images/top-menus/kentucky.jpg',
      },
      {
        title: 'Moussaka',
        image: './images/top-menus/moussaka.jpg',
      },
      {
        title: 'Read Peas Soup',
        image: './images/top-menus/red-peas.jpg',
      },
    ];
  }

  connectedCallback() {
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
    for (const menu of menus) {
      listItem += `
                <div class="list__item" tabindex="0">
                    <img src="${menu.image}" width="200px" height="200px"
                        alt="${menu.title}">
                    <h3 class="title__item" tabindex="0">${menu.title}</h3>
                    <div class="rating">
                        ${this.loopingStar()}
                    </div>
                </div>
            `;
    }
    return listItem;
  }

  loopingStar() {
    let star = '';
    for (let i = 0; i < 5; i++) {
      star += '<img class="star" src="./images/icons/star-solid.svg">';
    }
    return star;
  }
}

customElements.define('top-menus', TopMenu);
