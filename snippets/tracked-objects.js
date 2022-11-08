import { tracked } from '@glimmer/tracking';

class MyObject {
  @tracked trackedValue = 'hello';
  untrackedValue = 'Financeit';
}
