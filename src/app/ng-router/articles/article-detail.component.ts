import {Component, OnInit} from "@angular/core";
import {delay, filter, Observable, pluck, switchMap} from "rxjs";
import {Article} from "../models/articles";
import {ActivatedRoute} from "@angular/router";
import {ArticlesService} from "./articles.service";

@Component({
  selector: "app-articles-detail",
  template: `
    <ng-container *ngIf="article$ | async as article; else loading">
      {{ article.title }}
      {{ article.body }}
    </ng-container>
    <ng-template #loading>
      Loading...
    </ng-template>
  `
})
export class ArticlesDetailComponent implements OnInit {
  article$?: Observable<Article>;

  constructor(
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.article$ = this.route.data.pipe(pluck("article"));
  }
}
