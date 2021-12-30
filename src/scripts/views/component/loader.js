class Loader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="loader-wrapper">
                <div class="loader"><span class="loader-inner"></span></div>
            </div>
        `;
  }
}

customElements.define('loader-content', Loader);
