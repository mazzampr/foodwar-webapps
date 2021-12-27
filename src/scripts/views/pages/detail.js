/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import RestaurantSource from '../../data/restaurant-resource';
import urlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import addReview from '../../utils/post-review';
import '../component/loader';
import { createDetailRestoTemplate, offlineMode } from '../templates/template-creator';

const Detail = {
  async render() {
    document.documentElement.scrollTop = 0;
    return `
        <loader-content></loader-content>
        <ul class="breadcrumb">
           <li><a href="#/home">Home</a></li> 
           <li>/</li>
           <li>Detail Restaurant</li>
        </ul>
        <div class="detail-content"></div>
        <div id="likeButtonContainer"></div>`;
  },

  async afterRender() {
    const url = urlParser.parseActiveUrlWithoutCombiner();
    const content = document.querySelector('.main');
    const detailContainer = document.querySelector('.detail-content');
    const loader = document.querySelector('.loader-wrapper');
    try {
      const data = await RestaurantSource.detailResto(url.id);
      detailContainer.innerHTML = createDetailRestoTemplate(data.restaurant);
      addReview.release(url);
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: data.restaurant.id,
          name: data.restaurant.name,
          address: data.restaurant.address,
          city: data.restaurant.city,
          categories: data.restaurant.categories,
          menus: data.restaurant.menus,
          rating: data.restaurant.rating,
          pictureId: data.restaurant.pictureId,
          description: data.restaurant.description,
          customerReviews: data.restaurant.customerReviews,
        },
      });
      loader.style.display = 'none';
    } catch (error) {
      content.innerHTML = offlineMode();
      loader.style.display = 'none';
    }
  },

};

export default Detail;
