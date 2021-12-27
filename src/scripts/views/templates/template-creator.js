/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
import '@fortawesome/fontawesome-free';
import CONFIG from '../../globals/config';

const createRestoItemTemplate = (restaurant) => `
    <div class="resto__item" tabindex="0">
        <img class="img" src="${CONFIG.BASE_IMAGE_MEDIUM + restaurant.pictureId}"
            width="300px" alt="${restaurant.name}">
        <h3 class="title__resto"><a href="${`/#/detail/${restaurant.id}`}" tabindex="0">${restaurant.name}</a></h3>
        <p class="description">Our Best Restaurant</p>
        <div class="location">
            <i class="fas fa-map-marker-alt"></i>
            <p tabindex="0">${restaurant.city}</p>
        </div>
        <div class="rating__resto">
            <div class="gap">
                <span><i class="fas fa-star"></i></span>
                <p>${restaurant.rating}</p>
            </div>
        </div>
    </div>`;

const createDetailRestoTemplate = (restaurant) => `
    <div class="detail-header">
        <div class="image-resto"><img src="${CONFIG.BASE_IMAGE_LARGE + restaurant.pictureId}" alt="${restaurant.name}"></div>
        <div class="branding">
            <h1 tabindex="0">${restaurant.name}</h1>
            <p tabindex="0"><i class="fas fa-map-marker-alt"></i> ${restaurant.city}</p>
            <p tabindex="0"><i class="fas fa-road"></i> ${restaurant.address}</p>
            <p tabindex="0"><i class="fas fa-star"></i> ${restaurant.rating}</p>
            <hr class="line-border">
            <div class="categories">
                <p>Category :</p>
                ${restaurant.categories.map((category) => `<button class="btn-category" aria-label="category">${category.name}</button>`).join(' ')}
            </div>
        </div>
    </div>
    <div class="detail-body">
        <div class="description tabindex="0"">
            <h2>Description</h2>
            <p tabindex="0">${restaurant.description.slice(0, 250).concat('...')}</p>
        </div>
        <div class="menus">
            <h2 tabindex="0">Daftar menu</h2>
            <div class="menu-container">
                <div class="food-menu card">
                    <h3 tabindex="0">Food</h3>
                    <ul class="food-list">
                    ${restaurant.menus.foods.map((food) => `<li tabindex="0">${food.name}</li>`).join(' ')}
                    </ul>
                </div>
                <div class="drink-menu card">
                    <h3 tabindex="0">Drink</h3>
                    <ul class="drink-list">
                    ${restaurant.menus.drinks.map((drink) => `<li tabindex="0">${drink.name}</li>`).join(' ')}
                    </ul>
                </div>
            </div>
        </div>
        <div id="customerReview">
            <h2 tabindex="0">Customer Review ( <span>${restaurant.customerReviews.length}</span> )</h2>
            <div class="list-review">
                
            </div>  

            <div class="form-review">
                <h2 tabindex="0">Add New Review</h2>
                <div class="user-input">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="nameReview" placeholder="Your name" required>
                </div>
                <div class="review-input">
                    <label for="review">Review</label>
                    <textarea name="review" id="reviewDetail" placeholder="Input your review"
                        required></textarea>
                </div>
                <button id="submitReview" aria-label="Submit your review">Submit</button>
            </div>
        </div>
    </div>`;

const createReviewTemplate = (data) => {
  let dataReviewer = '';
  data.forEach((review) => {
    dataReviewer += `
        <div class="item-review card">
            <h3>${review.name}</h3>
            <p id="date">${review.date}</p>
            <hr>
            <p id="commentReview">${review.review}</p>
        </div>`;
  });
  return dataReviewer;
};

const createLikeButton = () => `
    <button aria-label="like this movie" id="likeButton" class="btn btn-like" aria-label="add to favorite">
        <i class="far fa-heart love"></i>
    </button>`;

const createLikedButton = () => `
    <button aria-label="like this movie" id="likeButton" class="btn btn-like" aria-label="remove from favorite">
        <i class="fas fa-heart love"></i>
    </button>`;

const offlineMode = () => `
<div class="offline-mode">
    <img class="img" src="./images/no-connection.png" alt="Your device is offline">
    <h3>Sorry, Your device is offline</h3>
</div>`;

const EmptyFavoriteResto = () => `
<div class="empty-favorite">
    <h3>Favorite Restaurant is still empty</h3>
    <p>You must add your favorite restaurant!</p>
</div>`;

export {
  createRestoItemTemplate,
  createDetailRestoTemplate,
  createReviewTemplate,
  offlineMode,
  createLikeButton,
  createLikedButton,
  EmptyFavoriteResto,
};
