import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.new-folder1.caption'),
          title: i18n.t('forms.application.sitemap.new-folder1.title'),
          children: [{
            link: 'i-i-s-test22-контр-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-test22-контр-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-test22-контр-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-test22-ном-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-test22-ном-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-test22-ном-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-test22-тест-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-test22-тест-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-test22-тест-l.title'),
            icon: 'tasks',
            children: null
          }]
        }
      ]
    };
  }),
})