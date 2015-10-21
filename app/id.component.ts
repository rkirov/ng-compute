import {Component, Input, Output, EventEmitter, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'id',
  template: ``,
  directives: [CORE_DIRECTIVES]
})
export class IdComponent {
  @Input('x') set x(input: number) { this.fx.next(input); }
  @Output() fx: EventEmitter = new EventEmitter();
}