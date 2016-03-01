import {Component, View} from 'angular2/core';

@Component({
  selector: 'insignety'
})

@View({
  templateUrl: 'insignety.html'
})

export class Insignety {

  constructor() {
    console.info('Insignety Component Mounted Successfully');
  }

}
