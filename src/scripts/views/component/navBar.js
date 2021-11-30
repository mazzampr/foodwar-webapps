class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <ul id="navigationDrawer" class="list">
                <li><a href="#appBar">Home</a></li>
                <li><a href="#">Favorite</a></li>
                <li><a href="https://www.linkedin.com/in/mazzampr/" target="_blank">About Us</a></li>
            </ul>
        `;
    }
}

customElements.define('nav-bar', NavBar);