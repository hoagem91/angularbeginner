import {Component, OnDestroy, OnInit} from "@angular/core";
import {
  combineLatest,
  concat,
  delay,
  forkJoin, fromEvent,
  interval,
  map,
  mapTo,
  merge,
  Observable,
  of,
  Subscription, take, withLatestFrom,
  zip
} from "rxjs";
import {compileResults} from "@angular/compiler-cli/src/ngtsc/annotations/common";

@Component({
  selector:'app-combination',
  template:``
})
export class CombinationComponent implements OnDestroy {
  // private subscriptions?: Subscription;
  // ngOnInit() {
  //   this.forkJoinExample()
  // }
  // forkJoinExample(){
  //   const obj1 = new Observable(observer => {
  //     setTimeout(() => {
  //       observer.next("Data from AP1")
  //       observer.complete();
  //     },2000)
  //   })
  //   const obj2 = new Observable(observer => {
  //     setTimeout(() => {
  //       observer.next("Data from AP2")
  //       observer.complete();
  //     },1000)
  //   })
  //   const obj3 = new Observable(observer => {
  //     setTimeout(() => {
  //       observer.next("Data from AP3")
  //       observer.complete();
  //     },3000)
  //   })
  //
  //   this.subscriptions = forkJoin([obj1,obj2,obj3]).subscribe({
  //     next: value => console.log("Value:",value),
  //     error: error => console.log("Error:",error),
  //     complete : ()=>console.log("Complete")
  //   })
  // }
  // ngOnDestroy() {
  //   this.subscriptions?.unsubscribe();
  // }

  private subscription?: Subscription;
  constructor() {
    // this.forkJoinExample();
    // this.combineLatestExample()
    // this.zipExample()
    this.withLastestFromExmaple()
  }
  forkJoinExample(){
    const obj1 = of("Data from AP1").pipe(delay(2000));
    const obj2 = of("Data from AP2").pipe(delay(1000));
    const obj3 = of("Data from AP3").pipe(delay(3000));
    this.subscription = forkJoin([obj1,obj2,obj3]).subscribe({
      next: value => console.log("All observe completed:",value),
      error: error => console.error("Error in forkJoin:", error)
    });
  }
  combineLatestExample(){
    console.log("combineLatestExample");
    this.subscription = combineLatest([interval(2000).pipe(map(x => `First: ${x}`)),
      interval(1000).pipe(map(x => `Second: ${x}`)),
      interval(3000).pipe(map(x => `Third: ${x}`)),
    ]).subscribe(value => console.log(value));
  }
  zipExample(){
    this.subscription = zip(of(1,2,3),of(4,5,6),of(7,8,9)).subscribe(value => console.log(value));
    // Result
    // ((3) [1, 4, 7]
    // (3) [2, 5, 8]
    // (3) [3, 6, 9])
  }
  concatExample(){
    this.subscription = concat(of(4,5,6),of(1,2,3)).subscribe(value => console.log(value));
  }
  mergeExample(){
    this.subscription = merge(interval(1000).pipe(mapTo("first"),take(5)),
        interval(1000).pipe(mapTo("Second"),take(1)),
        interval(3000).pipe(mapTo("Third"),take(2))
      ).subscribe(value => console.log(value));
  }
  withLastestFromExmaple(){
    this.subscription = fromEvent(document,"click").pipe(withLatestFrom(interval(1000))).subscribe(value => console.log(value));
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
