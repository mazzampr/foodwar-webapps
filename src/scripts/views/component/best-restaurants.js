class BestRestaurants extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="top__resto">
            <div class="info__content">
                <h2 class="title__content" tabindex="0">
                    BEST RESTAURANT
                </h2>
                <p class="description__content" tabindex="0">
                    The Best Restaurant in this month
                </p>
            </div>
            <div id="restaurants" class="list__resto">
            </div>
        </section>`;
  }
}

customElements.define('best-restaurants', BestRestaurants);
