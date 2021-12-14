/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import RestaurantSource from '../data/restaurant-resource';
import { createReviewTemplate } from '../views/templates/template-creator';

const addReview = {
  release(url) {
    const reviewName = document.querySelector('#nameReview');
    const reviewDetail = document.querySelector('#reviewDetail');
    const submit = document.querySelector('#submitReview');
    this.reviewRender(url);

    submit.addEventListener('click', async () => {
      const newReview = {
        id: url.id,
        name: reviewName.value,
        review: reviewDetail.value,
      };

      if (!!newReview.name && !!newReview.review) {
        const listReviewContainer = document.querySelector('.list-review');
        try {
          const response = await RestaurantSource.restaurantReview(newReview);
          RestaurantSource.detailResto(url.id);
          listReviewContainer.innerHTML = createReviewTemplate(response.customerReviews);
        } catch (error) {
          listReviewContainer.innerHTML = `<b> Error : </b> ${error}`;
        }
      }
      this._zeroReview();
    });
  },

  async reviewRender(url) {
    const listReviewContainer = document.querySelector('.list-review');

    const data = await RestaurantSource.detailResto(url.id);
    listReviewContainer.innerHTML = createReviewTemplate(data.restaurant.customerReviews);
  },
  _zeroReview() {
    document.querySelector('#nameReview').value = '';
    document.querySelector('#reviewDetail').value = '';
  },
};

export default addReview;
