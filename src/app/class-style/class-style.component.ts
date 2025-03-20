import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.scss']
})
export class ClassStyleComponent implements OnInit {
  border = false;
  change = false;
  constructor() { }

  ngOnInit(): void {
  }

}
