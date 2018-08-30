import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | users', function(hooks) {
  setupTest(hooks);

  
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:users');
    assert.ok(controller);
  });
  test('Expected behaviour reverseDirection()', function(assert) {
    let controller = this.owner.lookup('controller:users');
    assert.equal(controller.reverseDirection(), 'desc');
    controller.set('currentSortingDirection', 'desc')
    assert.equal(controller.reverseDirection(), 'asc');
  });
});
