import { module, test } from 'qunit';
import { click, visit, currentURL, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | navigating', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting home redirect to /users', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/users');
  });
  test('navigating across the app', async function(assert) {
    await visit('/users');
    await click('.btn-posts')
    assert.equal(currentURL(), '/posts');
    await click('.btn-users')
    assert.equal(currentURL(), '/users');
    await fillIn('#input-holder-name', 'Chelsey')
    // assert.equal(this.element.querySelectorAll('.div-clickable').length, 1, 'Chelsey card is present');
  });
});
