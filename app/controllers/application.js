import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service router;

  routes = [
    { title: 'Tracked Values', name: 'tracked-values' },
    { title: 'Tracked Objects', name: 'tracked-objects' },
    { title: 'Ember Data Models', name: 'ember-data-models' },
    { title: 'Component Arguments', name: 'component-args' },
    { title: 'Getters', name: 'getters' },
  ];

  get nextRoute() {
    const currentIndex = this.currentRouteIndex();
    if (currentIndex >= this.routes.length) {
      return null;
    }

    return this.routes[currentIndex + 1];
  }

  get prevRoute() {
    const currentIndex = this.currentRouteIndex();
    if (currentIndex - 1 < 0) {
      return null;
    }

    return this.routes[currentIndex - 1];
  }

  currentRouteIndex() {
    return this.routes.findIndex((route) => this.router.isActive(route.name));
  }
}
