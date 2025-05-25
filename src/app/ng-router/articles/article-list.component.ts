import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Article} from "../models/articles";
import {ArticlesService} from "./articles.service";
import {Router} from "@angular/router";

@Component({
  selector: "articles-list",
  template:`
    <ul>
      <li *ngFor="let article of articles$|async">
        {{article.title}}
        <br>
        <a (click)="onReadMoreClick(article.slug)">Read More</a>
        <a (click)="onEditClick(article.slug)">Edit</a>
      </li>
    </ul>
  `
})
export class ArticlesListComponent implements OnInit {
  articles$!: Observable<Article[]>;
  constructor(private readonly articlesService: ArticlesService,private readonly router: Router) {
  }
  ngOnInit() {
    this.articles$ = this.articlesService.article$;
  }

  onReadMoreClick(slug:string) {
    this.router.navigate(['/articles',slug])
  }
  onEditClick(slug:string) {
    this.router.navigate(['/articles',slug,"edit"])
  }
}
