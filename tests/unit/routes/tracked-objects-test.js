import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tracked-objects', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:tracked-objects');
    assert.ok(route);
  });
});
