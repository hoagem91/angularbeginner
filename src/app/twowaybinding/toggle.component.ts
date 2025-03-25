import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  selector: "app-toggle",
  templateUrl: "toggle.component.html",
})
export class ToggleComponent implements OnInit {
@Input() checked!: boolean;
@Output() onChange = new EventEmitter<boolean>();

  toggleChange(){
    this.checked = !this.checked;
    this.onChange.emit(this.checked);
  };
  ngOnInit() {
  }
}
