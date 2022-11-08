import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class extends Component {
  @tracked trackedValue = 1;
  untrackedValue = 1;

  @tracked trackedObject = {
    value: 20,
  };
}
