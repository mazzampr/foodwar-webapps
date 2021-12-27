/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="hero">
                <div class="hero-text">
                    <h1 class="title">Find Your <span class="bg-text">Favorite</span> Food<br>From the Best Restaurant</h1>
                    <button class="btn btn-order">Pesan sekarang</button>
                </div>
            </div>
        `;
    document.querySelector('.btn-order').onclick = this._scroll;
  }

  _scroll() {
    const heros = document.querySelector('.hero');
    window.scrollTo(0, heros.clientHeight);
  }
}

customElements.define('hero-element', HeroElement);
