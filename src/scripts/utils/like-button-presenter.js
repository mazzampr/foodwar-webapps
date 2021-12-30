/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable no-underscore-dangle */
import FavoriteRestoIdb from '../data/favoriteresto-idb';

const { createLikeRestoButton, createUnlikeRestoButton } = require('../views/templates/template-creator');

const LikeButtonPresenter = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const restaurant = await FavoriteRestoIdb.getResto(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestoButton();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this._restaurant);
      alert('Yess, Restaurant berhasil ditambahkan ke favorit!');
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeRestoButton();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this._restaurant.id);
      alert('Restaurant berhasil dihapus dari favorit');
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
