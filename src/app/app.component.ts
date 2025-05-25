import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ToggleComponent} from "./twowaybinding/toggle.component";
import {TestServiceService} from "./test-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  // user = {
  //   name:"hoang",
  //   age:20
  // }
  // title = 'AngularApp';
  // currentProgress = 70;
  // isChecked = true;
  // onChildEmit(status: boolean) {
  //   console.log(status);
  // }
  // @ViewChild(ToggleComponent) toggleComponent!: ToggleComponent;
  // @ViewChild('toggleButton') toggleBtn!: ElementRef<HTMLButtonElement>;
  // @ViewChildren(ToggleComponent) toggleChildren!: QueryList<ToggleComponent>;
  // listNumber = []
  // constructor(private tesService: TestServiceService) {
  // }
  //
  // lastView= true;
  // ngOnInit() {
  //   this.tesService.getName();
  //   // this.toggleChildren.changes.subscribe(console.log);
  //   this.tesService.getData().subscribe({
  //     next: (data: any) => {
  //       this.listNumber = data;
  //       console.log(this.listNumber);
  //     },
  //   })
  // }
  // ngAfterViewInit() {
  //   console.log(this.toggleComponent?.checked);
  //   this.toggleChildren.changes.subscribe(console.log)
  //   console.log(this.toggleComponent);
  //   console.log(this.toggleChildren);
  // }
  // currenIndex = 0;
  // onchangeActive(index: number) {
  //   console.log(index);
  // }
  // showTab4=true;
  // ngOnInit() {
  // }
}
