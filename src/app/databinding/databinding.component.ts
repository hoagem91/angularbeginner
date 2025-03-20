import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {
  name = "Angular";
  user = {
    name: "Hoang Em",
    email: "hoang@gmail.com"
  };
  handler(event: any) {
    console.log("clicked",event);
  }
  constructor() { }

  ngOnInit(): void {
  }

  protected readonly events = module
}
