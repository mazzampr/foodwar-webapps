const DrawerInitiator = {
    init({ button, drawer, content }) {
        button.addEventListener('click', (e) => {
            this._toggleDrawer({ button, e, drawer });
        });
        content.addEventListener('click', (e) => {
            this._closeDrawer({ button, e, drawer });
        });
    },

    _toggleDrawer({ button, e, drawer }) {
        e.stopPropagation();
        drawer.classList.toggle('slide');
        button.classList.toggle('slide');
    },

    _closeDrawer({ button,e, drawer}) {
        e.stopPropagation();
        drawer.classList.remove('slide');
        button.classList.remove('slide');
    },
};

export default DrawerInitiator;