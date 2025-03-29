import { Injectable } from '@angular/core';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  private name = 'TestServiceService';

  getName(): string {
    return  this.name;
  }

  getData() {
    return of([1,2,3,4]);
  }

  constructor() { }
}
