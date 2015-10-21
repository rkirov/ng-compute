import {Component, Input, Output, EventEmitter, CORE_DIRECTIVES} from 'angular2/angular2';
import {IdComponent} from "./id.component";
import {Queen} from "./queen.component";

@Component({
  selector: 'app',
  template: `
    <queen *ng-for="#q of [1,2,3,4,5,6,7,8]; #i = index"
       [idx]="i" [pos]="pos[i]" [move]="mustMove(i)" (newpos)="pos[i] = $event"></queen>
    <div *ng-if="solved"> Success!!!</div>
  `,
  directives: [Queen, IdComponent, CORE_DIRECTIVES]
})
export class QueenAppComponent {
  pos: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
  get solved(): boolean {
    for (var i = 0; i < this.pos.length; i++) {
      for (var j = i + 1; j < this.pos.length; j++) {
        var [pi, pj] = [this.pos[i], this.pos[j]];
        if (pi == pj || Math.abs(pi - pj) == j - i) return false;
      }
    }
    return true;
  }

  mustMove(i) {
    if (this.solved) return false;
    for (var j = i + 1; j < this.pos.length; j++) {
      if (this.pos[j] != 7) return false;
    }
    return true;
  }
}