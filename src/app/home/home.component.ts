import {Component, OnInit} from "@angular/core";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {Observable, of} from "rxjs";
import {Article} from "../models/article";
import {AsyncPipe, CommonModule} from "@angular/common";
import {ArticleService} from "../service/article.service";

@Component({
    selector: 'app-home',
    template: `
        <p>Home Works!</p>
        <ul>
            <li *ngFor="let article of article$ | async" style="border:1px solid black;padding:10px;margin-bottom: 10px">
                {{article.title}}
                <br>
<!--                <a [routerLink]="['/detail',article.slug]">ReadMore</a>-->
                <a style="cursor: pointer;text-decoration: underline" (click)="onReadMore(article.slug)">ReadMore</a>
            </li>
        </ul>
    `,
    imports: [
        // RouterOutlet,
        AsyncPipe,
        CommonModule,
        // RouterLink,
    ],
    styles: []
})
export class HomeComponent implements OnInit {
    article$?: Observable<Article[]>;
    constructor(private readonly articleService: ArticleService,private router: Router) {}
    ngOnInit() {
        this.article$ = this.articleService.article$;
    }
    onReadMore(slug:string) {
        this.router.navigate(['/detail',slug]);
    }
}