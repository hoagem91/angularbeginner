import {Component, OnDestroy, OnInit} from "@angular/core";
import {
  auditTime, debounceTime,
  distinct, distinctUntilChanged,
  first,
  from,
  fromEvent,
  interval,
  last, skip, skipUntil,
  Subject,
  Subscription,
  take,
  takeLast,
  takeUntil,
  takeWhile,
  tap, throttleTime
} from "rxjs";

@Component({
  selector:"app-observable",
  template:`<button>StartCount</button>>`
})
export class AppObservable implements OnInit , OnDestroy {
  private subscriptions ?: Subscription;
  // destroy$ = new Subject<void>();
  // startCount(){
  //   interval(1000).pipe(takeUntil(fromEvent(document,"click"))).subscribe(value => console.log("Count: ",value));
  // }
  // ngOnDestroy() {
  //   console.log("Component is being destroyed");
  //   // this.destroy$.next();
  //   // this.destroy$.complete();
  //   this.subcriptions?.unsubscribe();
  // }

  ngOnInit() {
    this.subscriptions = interval(2000).pipe(debounceTime(1500)).subscribe(value => console.log(value));
  }
  ngOnDestroy() {
    console.log("Complete");
    this.subscriptions?.unsubscribe();
  }
}
