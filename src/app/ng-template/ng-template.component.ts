import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.scss']
})
export class NgTemplateComponent implements OnInit {
  @Input() infoUser!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
