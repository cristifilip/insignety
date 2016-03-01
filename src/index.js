import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Insignety} from 'insignety';

@Component({
  selector: 'main'
})

@View({
  directives: [Insignety],
  template: `
    <insignety></insignety>
  `
})

class Main {

}

bootstrap(Main);
