import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async listResto() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANTS);
    return response.json();
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async restaurantReview(data) {
    const reviewResponse = await fetch(API_ENDPOINT.RESTO_REVIEW, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseJson = await reviewResponse.json();
    return responseJson;
  }
}

export default RestaurantSource;
