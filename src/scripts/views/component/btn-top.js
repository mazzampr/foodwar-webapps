class BtnTop extends HTMLElement {
    connectedCallback() {
        this.render();
        
    }

    render() {
        this.innerHTML = `
            <button class="btn-top" aria-label="Scroll Top"><i class="fas fa-arrow-up arrow"></i></button>
        `;
        window.addEventListener('scroll', this.scrollFuntion);
        document.querySelector('.btn-top').addEventListener('click', this.topScroll);
    }

    scrollFuntion() {
        const btn = document.querySelector('.btn-top');
        if(document.documentElement.scrollTop > 350) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    }

    topScroll() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}

customElements.define('button-top', BtnTop);