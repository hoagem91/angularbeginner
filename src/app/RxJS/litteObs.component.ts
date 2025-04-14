import {Component, OnDestroy} from "@angular/core";
import {concat, concatAll, fromEvent, interval, map, mergeAll, of, switchAll, take} from "rxjs";

@Component({
  selector: "app-higher-odder",
  template: ``
})
export class HigherOderObs {
  constructor() {
    this.mergeAllExample()
    this.concatAllExample()
  }
  mergeAllExample(){
    const hoo = interval(1000).pipe(map((val)=> of(`I am at : ${val}`)) , mergeAll())
    // hoo.subscribe(console.log)
  }
  concatAllExample(){
    const hoo = fromEvent(document,"click").pipe(map(()=>interval(1000).pipe(take(5))))
    // hoo.pipe(mergeAll()).subscribe(console.log)
    // hoo.pipe(concatAll()).subscribe(console.log)
    hoo.pipe(switchAll()).subscribe(console.log)
  }
}
