import {Component} from "@angular/core";

let _count=1;
@Component({
  selector: 'app-counter',
  template: `count = {{count}}`,
})
export class CounterComponent {
  count = _count++;
}
