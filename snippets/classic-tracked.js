import Component from '@ember/component';

export default Component.extend({
  trackedValue: true,
  untrackedValue: true,
  actions: {
    toggleTrackedValue() {
      this.set('trackedValue', !this.trackedValue);
    },

    toggleUntrackedValue() {
      this.untrackedValue = !this.untrackedValue;
    },
  },
});
