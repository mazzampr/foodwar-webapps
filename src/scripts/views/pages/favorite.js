/* eslint-disable linebreak-style */
import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import '../component/loader';
import { createRestoItemTemplate, EmptyFavoriteResto } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <loader-content></loader-content>
        <ul class="breadcrumb">
           <li><a href="#/home">Home</a></li> 
           <li>/</li>
           <li>Favorite Restaurant</li>
        </ul>
        <div id="favoriteContainer">
        </div>`;
  },
  async afterRender() {
    const favoriteContainer = document.querySelector('#favoriteContainer');
    const content = document.querySelector('.main');
    const loader = document.querySelector('.loader-wrapper');
    const restaurants = await FavoriteRestoIdb.getAllResto();

    if (restaurants.length === 0) {
      content.innerHTML += EmptyFavoriteResto();
      document.querySelector('.loader-wrapper').style.display = 'none';
    } else {
      restaurants.forEach((restaurant) => {
        favoriteContainer.innerHTML += createRestoItemTemplate(restaurant);
      });
      loader.style.display = 'none';
    }
  },
};

export default Favorite;
