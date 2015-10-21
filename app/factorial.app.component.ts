import {Component} from 'angular2/angular2';
import {FactorialComponent} from "./factorial.component";

@Component({
  selector: 'app',
  template: `
    <fact [x]="in" (fx)="out = $event"></fact>{{in}}! = {{out}}
    <button (click)="in = in + 1">+1</button>
  `,
  directives: [FactorialComponent]
})
export class FactorialAppComponent {
  in: number = 1;
  out: number;
}