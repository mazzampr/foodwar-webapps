class HeroElement extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="hero">
                <div class="hero-text">
                    <h1 class="title">Find Your <span class="bg-text">Favorite</span> Food<br>From the Best Restaurant</h1>
                    <button class="btn-order">Pesan sekarang</button>
                </div>
            </div>
        `;
    }
}

customElements.define('hero-element', HeroElement);