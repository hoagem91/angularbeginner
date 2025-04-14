import {Injectable} from "@angular/core";
import {delay, map, Observable, of} from "rxjs";
import {User} from "./types";
import {users} from "./constants";

@Injectable({providedIn: "root"})
export class UserService {
  getUser(query?: string): Observable<User[]> {
    return of(users).pipe(
      delay(2000),
      map(data =>
        data.filter(u => {
          if (!query) return true;
          return (
            u.name.toLowerCase().startsWith(query.toLowerCase()) ||
            u.username.toLowerCase().startsWith(query.toLowerCase()) ||
            u.email.toLowerCase().startsWith(query.toLowerCase())
          );
        })
      )
    )
  }
}
