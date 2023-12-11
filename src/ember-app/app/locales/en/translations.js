import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTest22контрLForm from './forms/i-i-s-test22-контр-l';
import IISTest22номLForm from './forms/i-i-s-test22-ном-l';
import IISTest22тестLForm from './forms/i-i-s-test22-тест-l';
import IISTest22контрEForm from './forms/i-i-s-test22-контр-e';
import IISTest22номEForm from './forms/i-i-s-test22-ном-e';
import IISTest22тестEForm from './forms/i-i-s-test22-тест-e';
import IISTest22контрModel from './models/i-i-s-test22-контр';
import IISTest22номModel from './models/i-i-s-test22-ном';
import IISTest22тестModel from './models/i-i-s-test22-тест';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test22-контр': IISTest22контрModel,
    'i-i-s-test22-ном': IISTest22номModel,
    'i-i-s-test22-тест': IISTest22тестModel
  },

  'application-name': 'Test22',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Test22',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test22',
          title: 'Test22'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'new-folder1': {
          caption: 'NewFolder1',
          title: 'NewFolder1',
          'i-i-s-test22-контр-l': {
            caption: 'контрL',
            title: 'Контр'
          },
          'i-i-s-test22-ном-l': {
            caption: 'номL',
            title: 'Ном'
          },
          'i-i-s-test22-тест-l': {
            caption: 'тестL',
            title: 'Тест'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test22-контр-l': IISTest22контрLForm,
    'i-i-s-test22-ном-l': IISTest22номLForm,
    'i-i-s-test22-тест-l': IISTest22тестLForm,
    'i-i-s-test22-контр-e': IISTest22контрEForm,
    'i-i-s-test22-ном-e': IISTest22номEForm,
    'i-i-s-test22-тест-e': IISTest22тестEForm
  },

});

export default translations;
