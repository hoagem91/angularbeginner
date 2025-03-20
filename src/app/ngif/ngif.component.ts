import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.scss']
})
export class NgifComponent implements OnInit {
  user= {
    name:"Hoang Em",
    staff:"Leader",
    age:21
  }
  constructor() { }

  ngOnInit(): void {
  }

}
