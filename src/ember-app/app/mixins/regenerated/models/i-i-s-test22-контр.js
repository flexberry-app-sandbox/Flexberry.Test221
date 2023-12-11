import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  контраг: DS.attr('string')
});

export let ValidationRules = {
  контраг: {
    descriptionKey: 'models.i-i-s-test22-контр.validations.контраг.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('контрE', 'i-i-s-test22-контр', {
    контраг: attr('Контраг', { index: 0 })
  });

  modelClass.defineProjection('контрL', 'i-i-s-test22-контр', {
    контраг: attr('Контраг', { index: 0 })
  });
};
