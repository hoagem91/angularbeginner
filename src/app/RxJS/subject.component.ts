import {Component, OnInit} from "@angular/core";
import {BehaviorSubject, ReplaySubject, Subject, Subscription} from "rxjs";

@Component({
  selector: "app-subject",
  template: `
  <button (click)="log()">btn</button>
{{subject | async}}

  `
})
export class SubjectComponent implements OnInit {
  subject = new ReplaySubject<string>(3);
  tesst$ = new BehaviorSubject<string>('');
  subCrip$!: Subscription;
constructor() {
    this.subCrip$ = this.subject.subscribe(value => console.log(value));
}

  ngOnInit(): void {
    this.subject.next("A");
    this.subject.next("B");
    this.subject.next("D");
    this.subject.next("E");
  }

  log(){
    this.subject.subscribe(value => console.log(value));
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
    this.subCrip$.unsubscribe();
  }
}
