import {Component, Input, Output, EventEmitter, CORE_DIRECTIVES} from 'angular2/angular2';
import {IdComponent} from "./id.component";

@Component({
  selector: 'fact',
  template: `
    <fact *ng-if="x > 1" [x]="x - 1" (fx)="fx.next(x * $event)"></fact>
    <id *ng-if="x == 1" [x]="x" (fx)="fx.next($event)"></id>
  `,
  directives: [CORE_DIRECTIVES, FactorialComponent, IdComponent]
})
export class FactorialComponent {
  @Input() x: number;
  @Output() fx: EventEmitter = new EventEmitter();
}