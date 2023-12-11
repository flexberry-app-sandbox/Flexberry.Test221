import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test22-контр-l');
  this.route('i-i-s-test22-контр-e',
  { path: 'i-i-s-test22-контр-e/:id' });
  this.route('i-i-s-test22-контр-e.new',
  { path: 'i-i-s-test22-контр-e/new' });
  this.route('i-i-s-test22-ном-l');
  this.route('i-i-s-test22-ном-e',
  { path: 'i-i-s-test22-ном-e/:id' });
  this.route('i-i-s-test22-ном-e.new',
  { path: 'i-i-s-test22-ном-e/new' });
  this.route('i-i-s-test22-тест-l');
  this.route('i-i-s-test22-тест-e',
  { path: 'i-i-s-test22-тест-e/:id' });
  this.route('i-i-s-test22-тест-e.new',
  { path: 'i-i-s-test22-тест-e/new' });
});

export default Router;
