import {Component, forwardRef} from "@angular/core";
import {TabGroupComponent} from "./tab-group.component";

const BsComponentProvider = {
  provide: TabGroupComponent,
  useExisting: forwardRef(() => TabBsGroupComponents),
}
@Component({
  selector: 'tab-bs-group',
  templateUrl: 'tab-bs-group.component.html',
  styles:[],
  providers:[BsComponentProvider],
})
export class TabBsGroupComponents extends TabGroupComponent {

}
