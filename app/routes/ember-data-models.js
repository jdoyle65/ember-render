import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EmberDataModelsRoute extends Route {
  @service store;

  async model() {
    this.store.push({
      data: {
        id: 1,
        type: 'user',
        attributes: {
          firstName: 'John',
          age: 47,
        },
      },
    });

    const record = this.store.peekRecord('user', 1);
    record.set('lastName', 'Smith');
    record.set('favouriteColour', 'blue');

    return record;
  }
}
