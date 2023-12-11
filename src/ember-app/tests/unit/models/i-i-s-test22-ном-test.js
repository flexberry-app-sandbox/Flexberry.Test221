import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test22-ном', 'Unit | Model | i-i-s-test22-ном', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-test22-контр',
    'model:i-i-s-test22-ном',
    'model:i-i-s-test22-тест',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
