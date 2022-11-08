/* eslint-disable ember/no-get */
/* eslint-disable ember/no-actions-hash */
/* eslint-disable ember/no-classic-classes */
/* eslint-disable ember/no-classic-components */
/* eslint-disable ember/require-tagless-components  */
import Component from '@ember/component';

export default Component.extend({
  trackedValue: true,
  untrackedValue: true,
  codeOutput: '',

  updateCodeOutput() {
    this.set(
      'codeOutput',
      `trackedValue = ${this.trackedValue};
untrackedValue = ${this.untrackedValue};
    `
    );
  },

  actions: {
    toggleTrackedValue() {
      this.set('trackedValue', !this.trackedValue);
      this.updateCodeOutput();
    },

    toggleUntrackedValue() {
      this.untrackedValue = !this.untrackedValue;
      this.updateCodeOutput();
    },

    updateCodeOutput() {
      this.updateCodeOutput();
    },
  },
});
