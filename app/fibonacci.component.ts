import {Component, Input, Output, EventEmitter, CORE_DIRECTIVES} from 'angular2/angular2';
import {IdComponent} from "./id.component";

@Component({
  selector: 'fib',
  template: `
    <fib *ng-if="x > 1" [x]="x - 1" (fx)="x1 = $event; up();"></fib>
    <fib *ng-if="x > 1" [x]="x - 2" (fx)="x2 = $event; up();"></fib>
    <id *ng-if="x == 1 || x == 0" [x]="x" (fx)="fx.next($event)"></id>
  `,
  directives: [FibonacciComponent, IdComponent, CORE_DIRECTIVES]
})
export class FibonacciComponent {
  @Input() x: number;
  x1: number;
  x2: number;
  @Output() fx: EventEmitter = new EventEmitter();
  up() { this.x1 && this.x2 && this.fx.next(this.x1 + this.x2);}
}