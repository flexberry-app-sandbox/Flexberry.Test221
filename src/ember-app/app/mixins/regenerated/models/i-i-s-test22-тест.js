import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  цена: DS.attr('number'),
  ном: DS.belongsTo('i-i-s-test22-ном', { inverse: null, async: false })
});

export let ValidationRules = {
  цена: {
    descriptionKey: 'models.i-i-s-test22-тест.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  ном: {
    descriptionKey: 'models.i-i-s-test22-тест.validations.ном.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('тестE', 'i-i-s-test22-тест', {
    цена: attr('Цена', { index: 0 }),
    ном: belongsTo('i-i-s-test22-ном', 'ном', {
      номном: attr('номном', { index: 2 }),
      контр: belongsTo('i-i-s-test22-контр', '', {
        контраг: attr('контраг', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: 1 })
  });

  modelClass.defineProjection('тестL', 'i-i-s-test22-тест', {
    цена: attr('Цена', { index: 0 })
  });
};
