import {Component} from "@angular/core";

@Component({
  selector: 'articles',
  template: `
    <div class="container">Articles</div>
    <router-outlet></router-outlet>
  `,
})
export class ArticlesComponent {
}
