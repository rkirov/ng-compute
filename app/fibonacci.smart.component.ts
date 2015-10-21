import {Component, Input, Output, EventEmitter, CORE_DIRECTIVES} from 'angular2/angular2';
import {IdComponent} from "./id.component";

@Component({
  selector: 'fib2',
  template: `
    <fib2 *ng-if="x > 1" [x]="x - 1" (fx)="fx.next([$event[0] + $event[1], $event[0]])"></fib2>
    <id *ng-if="x == 1 || x == 0" [x]="[1, 1]" (fx)="fx.next($event)"></id>
  `,
  directives: [FibonacciSmartComponent, IdComponent, CORE_DIRECTIVES]
})
export class FibonacciSmartComponent {
  @Input() x: number;
  @Output() fx: EventEmitter = new EventEmitter();
}