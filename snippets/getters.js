import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class extends Component {
  @tracked firstName = 'John';
  lastName = 'Smith';

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
