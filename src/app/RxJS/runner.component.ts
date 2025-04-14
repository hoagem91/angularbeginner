import {Component, OnInit} from "@angular/core";
import {FormControl} from "@angular/forms";
import {User} from "./types";
import {UserService} from "./user.service";
import {
  concat,
  concatMap,
  debounceTime,
  map,
  mergeMap,
  ReplaySubject,
  startWith,
  switchAll,
  switchMap,
  tap
} from "rxjs";

@Component({
  selector: "app-runner-obs",
  templateUrl: "runner.component.html",
})
export class RunnerComponent implements OnInit {
  queryControl = new FormControl();
  users: User[] = [];
  loading = true;

  constructor(private readonly userService: UserService) {

  }

  ngOnInit() {
    this.queryControl.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {
          this.loading = true;
        }),
        startWith(""),
        switchMap(query => this.userService.getUser(query).pipe(
          tap(()=>{
            this.loading = false;
          }),
        ))
      ).subscribe(users => {
      this.users = users;
    })
  }
}
