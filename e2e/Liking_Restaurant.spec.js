Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorites resto', ({ I }) => {
  I.seeElement('.empty-favorite');
  I.see('Favorite Restaurant is still empty', '.empty-favorite h3');
});

Scenario('Liking and unlike a restaurant', ({ I }) => {
  I.wait(3);
  I.seeElement('.empty-favorite');
  I.see('Favorite Restaurant is still empty', '.empty-favorite h3');
  // Like the restaurant
  I.amOnPage('/');
  I.wait(3);
  I.seeElement('.resto__item h3');
  I.click(locate('.resto__item h3').first());
  I.wait(3);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.resto__item');
  // Unlike the restaurant
  I.click(locate('.resto__item h3').first());
  I.wait(3);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.empty-favorite');
  I.see('Favorite Restaurant is still empty', '.empty-favorite h3');
});
