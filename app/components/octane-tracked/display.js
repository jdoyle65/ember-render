import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Component {
  @tracked codeOutput = '';

  @tracked trackedValue = true;
  untrackedValue = true;

  @action
  toggleTrackedValue() {
    this.trackedValue = !this.trackedValue;
    document.querySelector('[data-action="toggleTrackedValue"]').click();
    this.updateCodeOutput();
  }

  @action
  toggleUntrackedValue() {
    this.untrackedValue = !this.untrackedValue;
    document.querySelector('[data-action="toggleUntrackedValue"]').click();
    this.updateCodeOutput();
  }

  @action
  updateCodeOutput() {
    this.codeOutput = `trackedValue = ${this.trackedValue};
untrackedValue = ${this.untrackedValue};
    `;
  }
}
