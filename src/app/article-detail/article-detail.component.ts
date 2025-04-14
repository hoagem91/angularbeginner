import {Component, OnInit} from "@angular/core";
import {Article} from "../models/article";
import {filter, Observable, pluck, switchMap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ArticleService} from "../service/article.service";
import {AsyncPipe, CommonModule} from "@angular/common";

@Component({
    selector: 'app-article-detail',
    imports: [AsyncPipe,CommonModule],
    template: `
        <ng-container *ngIf="article$ | async as article;else noArticle">
            <h1>{{ article.title }}</h1>
            <p>{{ article.body }}</p>
        </ng-container>
        <ng-template #noArticle>
            No article found
        </ng-template>
    `,
})
export class ArticleDetailComponent implements OnInit {
    article$?: Observable<Article>;

    constructor(private readonly route: ActivatedRoute, private readonly articleService: ArticleService) {
    }

    ngOnInit() {
        this.article$ = this.route.params.pipe(
            pluck('slug'),
            switchMap(slug => this.articleService.getArticle(slug)),
            filter(article => !!article),
        )
    }
}