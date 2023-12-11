import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номном: DS.attr('string'),
  контр: DS.belongsTo('i-i-s-test22-контр', { inverse: null, async: false })
});

export let ValidationRules = {
  номном: {
    descriptionKey: 'models.i-i-s-test22-ном.validations.номном.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  контр: {
    descriptionKey: 'models.i-i-s-test22-ном.validations.контр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('номE', 'i-i-s-test22-ном', {
    номном: attr('Номном', { index: 0 }),
    контр: belongsTo('i-i-s-test22-контр', '', {
      контраг: attr('контраг', { index: 2 })
    }, { index: 1 })
  });

  modelClass.defineProjection('номL', 'i-i-s-test22-ном', {
    номном: attr('Номном', { index: 0 })
  });
};
