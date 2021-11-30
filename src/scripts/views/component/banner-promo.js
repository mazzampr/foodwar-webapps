class BannerPromo extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="banner__promo">
                <img src="./images/banner.png" alt="">
            </section>
        `;
    }
}

customElements.define('banner-promo', BannerPromo);