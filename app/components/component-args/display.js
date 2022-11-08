import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Component {
  @tracked codeOutput = '';
  @tracked replaceObject = false;

  @tracked trackedValue = 1;
  untrackedValue = 1;

  @tracked trackedObject = {
    value: 20,
  };

  @action
  increaseValues() {
    this.trackedValue++;
    this.untrackedValue++;
    this.updateCodeOutput();
  }

  @action
  increaseObjectValue() {
    this.trackedObject.value++;

    if (this.replaceObject) {
      this.trackedObject = { ...this.trackedObject };
    }

    this.updateCodeOutput();
  }

  @action
  updateCodeOutput() {
    this.codeOutput = `trackedValue = ${this.trackedValue};
untrackedValue = ${this.untrackedValue};

trackedObject = {
  value: ${this.trackedObject.value} 
}
`;
  }
}
