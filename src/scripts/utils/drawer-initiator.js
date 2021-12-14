/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (e) => {
      this._toggleDrawer({ e, button, drawer });
    });
    content.addEventListener('click', (e) => {
      this._closeDrawer({ e, button, drawer });
    });
    drawer.addEventListener('click', (e) => {
      this._closeDrawer({ e, button, drawer });
    });
  },

  _toggleDrawer({ e, button, drawer }) {
    e.stopPropagation();
    drawer.classList.toggle('slide');
    button.classList.toggle('slide');
  },

  _closeDrawer({ e, button, drawer }) {
    e.stopPropagation();
    drawer.classList.remove('slide');
    button.classList.remove('slide');
  },
};

export default DrawerInitiator;
