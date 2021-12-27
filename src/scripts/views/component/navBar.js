/* eslint-disable linebreak-style */
class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <ul id="navigationDrawer" class="list">
                <li><a href="#/home">Home</a></li>
                <li><a href="#/favorite">Favorite</a></li>
                <li><a href="https://www.linkedin.com/in/mazzampr/" target="_blank" rel="noreferrer">About Us</a></li>
            </ul>
        `;
  }
}

customElements.define('nav-bar', NavBar);
