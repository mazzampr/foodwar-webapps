Feature('Add New Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('add new review', ({ I }) => {
  I.wait(3);
  I.seeElement('.resto__item h3');
  I.click(locate('.resto__item h3').first());
  I.wait(3);
  I.seeElement('#customerReview');
  I.fillField('name', 'cupang');
  I.fillField('review', 'tesdulu');
  I.click('#submitReview');
  I.wait(3);
  I.see('cupang', '.item-review h3');
  I.see('tesdulu', '#commentReview');
});
