class Footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <footer class="footer">
                <p>Copyright © 2021 - Foodwar Apps</p>
                <p>Moh Azzam P - FrontEnd Web Developer</p>
            </footer>
        `;
    }
}

customElements.define('footer-app', Footer);