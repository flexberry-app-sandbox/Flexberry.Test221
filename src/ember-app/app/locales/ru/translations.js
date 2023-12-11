import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Test22',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test22',
          title: 'Test22'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
