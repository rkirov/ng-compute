import {Component, ViewChildren, QueryList, Input, Output, EventEmitter, CORE_DIRECTIVES} from 'angular2/angular2';
import {IdComponent} from "./id.component";
import {Queen} from "./queen.component";
import {SlowIdComponent} from "./slowid.component";

@Component({
  selector: 'app',
  template: `
    <div [style.height.px]="10 + 8 * 30">
      <div *ng-for="#idx of [0,1,2,3,4,5,6,7]">
        <queen *ng-if="possible(idx).length > 0" [idx]="idx" [pos]="pos(idx)"></queen>
        <id *ng-if="possible(idx).length == 0 && possible(idx - 1).length > 0"
            [x]="posIdx.toString()" (fx)="backtrack(idx)"></id>
      </div>
    </div>
    <!-- button shouldn't be needed but there is a bug and list doesn't update.-->
    <button (click)="true">Check board</button>
    <div *ng-if="visibleQueens?.length == 8"> Success!!!</div>
  `,
  directives: [Queen, IdComponent, SlowIdComponent, CORE_DIRECTIVES]
})
export class QueenAppSmartComponent {
  posIdx: number[] = [0, 0, 0, 0, 0, 0, 0, 0];

  @ViewChildren(Queen) visibleQueens: QueryList<Queen>;

  pos(i): number {
    return this.possible(i)[this.posIdx[i]];
  }

  backtrack(idx) {
    var back = idx - 1;
    // find the first exhausted list.
    while (this.posIdx[back] == this.possible(back).length - 1) back -= 1;
    this.posIdx[back] += 1;
    // clear subsequent indices.
    for (var i = back + 1; i < this.posIdx.length; i++) {
      this.posIdx[i] = 0;
    }
  }

  possible(st: number) {
    // needs some memoization.
    var ans = [];
    for (var i = 0; i < this.posIdx.length; i++) {
      var good = true;
      for (var j = 0; j < st; j++) {
        var pj = this.pos(j);
        if (i == pj || Math.abs(i - pj) == st - j) {
          good = false;
          break;
        }
      }
      if (good) ans.push(i);
    }
    return ans;
  }
}