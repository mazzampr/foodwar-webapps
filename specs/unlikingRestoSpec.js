import FavoriteRestoIdb from '../src/scripts/data/favoriteresto-idb';
import * as TestFactories from './helpers/testFactories';

const addFavoriteRestoButton = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Movie', () => {
  beforeEach(async () => {
    addFavoriteRestoButton();
    FavoriteRestoIdb.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(1);
  });
  it('should show unliking button when the resto has been add to favorite', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="remove from favorite"]'))
      .toBeTruthy();
  });

  it('should not show like button when the resto has been add to favorite', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="add to favorite"]'))
      .toBeFalsy();
  });

  it('should be able to remove favorite resto from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector('[aria-label="remove from favorite"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });

  it('should not throw error if the unliked resto is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    await FavoriteRestoIdb.deleteResto(1);

    document.querySelector('[aria-label="remove from favorite"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
