import FavoriteRestoIdb from '../src/scripts/data/favoriteresto-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Resto', () => {
  const addFavoriteRestoButton = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addFavoriteRestoButton();
  });

  it('should show like button when the resto has not been add to favorite before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="add to favorite"]'))
      .toBeTruthy();
  });

  it('should not show unlike button when the resto has not been add to favorite', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="remove from favorite"]'))
      .toBeFalsy();
  });

  it('should be able to like a resto', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestoIdb.getResto(1);
    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestoIdb.deleteResto(1);
  });

  it('should not add a resto again when its already to favorite', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    await FavoriteRestoIdb.putResto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    // tidak ada resto yang ganda
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }]);

    FavoriteRestoIdb.deleteResto(1);
  });

  it('should not add the resto when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
