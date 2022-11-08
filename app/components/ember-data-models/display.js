import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Component {
  @tracked codeOutput = '';

  @action
  randomColour() {
    const colours = ['red', 'blue', 'yellow'];
    const colourIndex = colours.indexOf(this.args.user.favouriteColour);
    this.args.user.favouriteColour =
      colours[(colourIndex + 1) % colours.length];
    this.updateCodeOutput();
  }

  @action
  increaseAge() {
    this.args.user.age = this.args.user.age + 1;
    this.updateCodeOutput();
  }

  @action
  updateCodeOutput() {
    this.codeOutput = `user = {
  firstName: "${this.args.user.firstName}",
  lastName: "${this.args.user.lastName}",
  age: ${this.args.user.age},
  favouriteColour: "${this.args.user.favouriteColour}"
}`;
  }
}
