import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {FibonacciComponent} from "./fibonacci.component";
import {FibonacciSmartComponent} from "./fibonacci.smart.component";

@Component({
  selector: 'app',
  template: `
    <button (click)="smart = !smart"> Toggle Smart</button> Smart: {{smart}}
    <div *ng-if="!smart"><fib [x]="in" (fx)="out = $event"></fib>F_{{in}} = {{out}}</div>
    <div *ng-if="smart"><fib2 [x]="in" (fx)="out = $event[0]"></fib2>F_{{in}} = {{out}}</div>
    <button (click)="in = in + 1">+1</button>
  `,
  directives: [FibonacciSmartComponent, FibonacciComponent, CORE_DIRECTIVES]
})
export class FibonacciAppComponent {
  smart: boolean = false;
  in: number = 1;
  out: number;
}