import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ToggleComponent} from "./twowaybinding/toggle.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularApp';
  currentProgress = 70;
  isChecked = true;
  onChildEmit(status: boolean) {
    console.log(status);
  }
  @ViewChild(ToggleComponent) toggleComponent!: ToggleComponent;
  @ViewChild('toggleButton') toggleBtn!: ElementRef<HTMLButtonElement>;
  @ViewChildren(ToggleComponent) toggleChildren!: QueryList<ToggleComponent>;

  lastView= true;

  ngAfterViewInit() {
    console.log(this.toggleComponent?.checked);
    this.toggleChildren.changes.subscribe(console.log)
  }
}
