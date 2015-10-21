import {Component, Input, Output, EventEmitter, CORE_DIRECTIVES} from 'angular2/angular2';
import {IdComponent} from "./id.component";

@Component({
  selector: 'queen',
  template: `♕ {{pos}} <id *ng-if="move" [x]="pos" (fx)="newpos.next(($event + 1) % 8)"></id>`,
  host: {"[style.top.px]": "pos * 30", "[style.left.px]": "idx * 30"},
  directives: [IdComponent, CORE_DIRECTIVES],
  styleUrls: ['app/queen.style.css']
})
export class Queen {
  @Input() pos: number;
  @Input() idx: number;
  @Input() move: boolean;
  @Output() newpos: EventEmitter = new EventEmitter();
}