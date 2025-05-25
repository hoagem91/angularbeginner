import {Component} from "@angular/core";
import {Observable, Observer} from "rxjs";
import {FormatAddressPipe} from "./format-address.pipe";

@Component({
  selector: "app-pipe",
  templateUrl: "./app-pipe.component.html",
  standalone: true,
  imports: [FormatAddressPipe],
})
export class PipeComponent {
  address=
    {
      address:"abc",
      city: "hanoi",
      state: "vietnam",
      zip: "088",
      country:"namdinh"
    }

  // currentDate = new Date();
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 5000);
  });

  greeting: Promise<string> | null = null;
  arrived: boolean = false;

  private resolve: Function | null = null;

  constructor() {
    this.reset();
  }

  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => {
      this.resolve = resolve;
    });
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve!('hi there!');
      this.arrived = true;
    }
  }
}
