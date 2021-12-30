class BannerPromo extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <section class="banner__promo">
                <img src="./images/banner.jpg" alt="Banner Promo">
            </section>
        `;
  }
}

customElements.define('banner-promo', BannerPromo);
