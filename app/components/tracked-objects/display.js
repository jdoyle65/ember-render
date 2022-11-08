import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Component {
  @tracked codeOutput = '';
  object = new MyObject();

  @action
  toggleTrackedValue() {
    if (this.object.trackedValue === 'hello') {
      this.object.trackedValue = 'goodbye';
    } else {
      this.object.trackedValue = 'hello';
    }

    this.updateCodeOutput();
  }

  @action
  toggleUntrackedValue() {
    if (this.object.untrackedValue === 'Financeit') {
      this.object.untrackedValue = 'Centah';
    } else {
      this.object.untrackedValue = 'Financeit';
    }

    this.updateCodeOutput();
  }

  @action
  updateCodeOutput() {
    this.codeOutput = `object = {
  trackedValue: "${this.object.trackedValue}",
  untrackedValue: "${this.object.untrackedValue}",
}`;
  }
}

class MyObject {
  @tracked trackedValue = 'hello';
  untrackedValue = 'Financeit';
}
