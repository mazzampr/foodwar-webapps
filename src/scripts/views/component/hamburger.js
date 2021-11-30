class HamburgerMenu extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <button class="hamburger" tabindex="0">
                <ul>
                    <li class="line"></li>
                    <li class="line"></li>
                    <li class="line"></li>
                </ul>
            </button>
        `;
    }
}

customElements.define('burger-menu', HamburgerMenu);