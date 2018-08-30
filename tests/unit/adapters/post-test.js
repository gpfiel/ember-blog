import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | post', function(hooks) {
  setupTest(hooks);
  
  test('it exists', function(assert) {
		let adapter = this.owner.lookup('adapter:post');
		assert.ok(adapter);
  });
  test('Adapter named correctly', function(assert) {
		let adapter = this.owner.lookup('adapter:post');
		assert.equal(adapter.pathForType(), 'posts')
  });
});
