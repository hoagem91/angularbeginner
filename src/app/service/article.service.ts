import {Injectable} from "@angular/core";
import {map, Observable, of, shareReplay} from "rxjs";
import {Article} from "../models/article";

@Injectable({
    providedIn: 'root',
})
export class ArticleService {
    get article$() {
        return of<Article[]>([
            {
                title: "Title1",
                body: "Component AppComponent is standalone and cannot be used in the @NgModule.bootstrap array. Use the bootstrapApplication function for bootstrap insteadComponent AppComponent is standalone and cannot be used in the @NgModule.bootstrap array. Use the bootstrapApplication function for bootstrap instead",
                slug: "title-1"
            },
            {
                title: "Title2",
                body: "Component AppComponent is standalone and cannot be used in the @NgModule.bootstrap array. Use the bootstrapApplication function for bootstrap insteadComponent AppComponent is standalone and cannot be used in the @NgModule.bootstrap array. Use the bootstrapApplication function for bootstrap instead",
                slug: "title-2"
            },
        ]).pipe(shareReplay(1))
    }

    getArticle(slug: string): Observable<Article | undefined> {
        return this.article$.pipe(map(articles => articles.find(ar => ar.slug === slug)));
    }
}