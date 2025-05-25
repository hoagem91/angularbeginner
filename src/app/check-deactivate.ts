import {Observable} from "rxjs";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";

export interface CheckDeactivate {
  checkDeactivate(currentRoute: ActivatedRouteSnapshot, currenState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean>;
}
