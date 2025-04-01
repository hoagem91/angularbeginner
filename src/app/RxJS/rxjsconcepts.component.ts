import {fromEvent, interval, Observable, take, takeUntil} from "rxjs";
import {Component, OnInit} from "@angular/core";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Component({
  selector: "app-rxjs",
  template: ``
})
export class AppRxJSComponent implements OnInit {

  observable = new Observable(function subcribe(observer) {
    const id = setTimeout(() => {
      observer.next("Hello rxjs")
      // observer.complete();
    }, 1000)
  });
  subcription = this.observable.subscribe({
    next: (value) => {
      console.log(value);
    },
    error: error => {
      console.log(error);
    },
    complete: () => {
      console.log("Done");
    }
  })
  ngOnInit() {
    interval(1000).pipe(
      take(5)
    ).subscribe({
      next: (value) => console.log(value),
      error: error => {},
      complete: () => console.log("Done")
    })
  }

}
