import {Injectable} from "@angular/core";
import {of} from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthService {
  get currentUser(){
    return of({username: 'hoang',articles:["title-1","title-3"]});
  }
}
