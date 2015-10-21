import {Component, Input, Output, EventEmitter, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'slow-id',
  template: ``,
  directives: [CORE_DIRECTIVES]
})
export class SlowIdComponent {
  @Input('x') set x(input: number) { setTimeout(() => this.fx.next(input), 1000); }
  @Output() fx: EventEmitter = new EventEmitter();
}