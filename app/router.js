import EmberRouter from '@ember/routing/router';
import config from 'ember-render/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('tracked-values');
  this.route('tracked-objects');
  this.route('ember-data-models');
  this.route('component-args');
  this.route('getters');
});
