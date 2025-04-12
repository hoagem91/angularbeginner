import {Component, OnDestroy} from "@angular/core";
import {
  catchError,
  forkJoin,
  map,
  of,
  Subscription,
  throwError,
  take,
  retry,
  fromEvent,
  throwIfEmpty,
  takeUntil, timer, Subject, delay, defaultIfEmpty, iif
} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: "app-error-handing",
  template: ``
})
export class ErrorHandingComponent implements OnDestroy {
  private subscription?: Subscription;

  constructor() {
    // this.ErrorHanding()
    // this.click$()
    // this.iifExample()
  }

  ErrorHanding() {
    const cached = [4, 5];
    // of(1, 2, 3, 4, 5)
    //   .pipe(map((n) => {
    //       if (cached.includes(n)) {
    //         throw new Error("Duplicated: " + n);
    //       }
    //       return n;
    //     }),
    //     catchError((err, caught) => of(err))
    //   )
    of(1, 2, 3, 4, 5).pipe(map((n) => {
        if (cached.includes(n)) {
          throw new Error("Duplicated: " + n);
        }
        return n;
      }),
      // catchError((err, caught) => caught),
      retry(3)
    )
    forkJoin([
      of(1),
      of(2),
      throwError(new Error('401')).pipe(catchError((err) => of(err))),
    ])
  }

  click$() {
    of().pipe(takeUntil(timer(1000)),
      // defaultIfEmpty("DefaultValue"),
      throwIfEmpty(() => "empty")
    )
  }



  // iifExample() {
  //   const userId = 123;
  //
  //   const trueObs = () => of("update");
  //   const falseObs = () => of("create");
  //
  //   iif(() => userId == null, trueObs, falseObs).subscribe(value => {
  //     console.log(value);
  //   });
  // }


  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
