import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{ name }}</h1>`,
  styles: ['h1 {font-family:Lato,sans-serif}']
})
export class HelloComponent {
  @Input() name: string='';
  constructor() { }

  ngOnInit(): void {
    console.log('Hello Init');
  }
  ngOnDestroy() {
    console.log('Hello Destroy');
  }
}
