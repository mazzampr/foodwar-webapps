/* eslint-disable linebreak-style */
import RestaurantSource from '../../data/restaurant-resource';
import urlParser from '../../routes/url-parser';
import addReview from '../../utils/post-review';
import '../component/loader';
import { createDetailRestoTemplate, offlineMode } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <loader-content></loader-content>
        <ul class="breadcrumb">
           <li><a href="#/home">Home</a></li> 
           <li>/</li>
           <li>Detail Restaurant</li>
        </ul>
        <div class="detail-content"></div>
        `;
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
      loader.style.display = 'none';
    } catch (error) {
      content.innerHTML = offlineMode();
      loader.style.display = 'none';
    }
  },

};

export default Detail;
