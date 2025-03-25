import { Component } from '@angular/core';

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
}
