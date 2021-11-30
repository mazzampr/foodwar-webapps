class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="logo">
                <img src="./images/logo.png" alt="Foodwar">
            </div>
        `;
    }
}

customElements.define('app-bar', AppBar);