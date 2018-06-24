import {Component, Input} from '@angular/core';

/**
 * Generated class for the CopyrightComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'copyright',
  templateUrl: 'copyright.html'
})
export class CopyrightComponent {
  @Input()bottom:number;
  text: string;

  constructor() {
    let year = (new Date()).getFullYear();
    this.text = `2017-${year} 点名系统`;
    this.bottom = 10;
  }
}
