import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Component {
  @tracked codeOutput = '';

  @tracked firstName = 'John';
  lastName = 'Smith';

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  @action
  updateFirstName() {
    const names = ['John', 'Jane', 'Jim'];
    this.firstName = names[(names.indexOf(this.firstName) + 1) % names.length];
    this.updateCodeOutput();
  }

  @action
  updateLastName() {
    const names = ['Smith', 'Doe', 'Strange'];
    this.lastName = names[(names.indexOf(this.lastName) + 1) % names.length];
    this.updateCodeOutput();
  }

  @action
  updateCodeOutput() {
    this.codeOutput = `firstName = ${this.firstName};
lastName = ${this.lastName};

fullName = ${this.fullName}
`;
  }
}
