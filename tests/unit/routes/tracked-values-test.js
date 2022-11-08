import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tracked-values', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:tracked-values');
    assert.ok(route);
  });
});
