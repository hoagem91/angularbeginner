import {Injectable} from "@angular/core";
import {Article} from "../../models/articles";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {catchError, delay, EMPTY, Observable, of, switchMap, tap} from "rxjs";
import {ArticlesService} from "../articles.service";

@Injectable({providedIn: 'root'})
export class ArticleResolvers implements Resolve<Article> {
  constructor(private readonly articleService: ArticlesService, private readonly router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Article> {
    const slug = route.params["slug"];
    if (!slug) {
      this.router.navigate(['/articles/no-article']);
      return EMPTY;
    }
    return this.articleService.getArticle(slug).pipe(
      delay(2000),
      switchMap(article => {
        if (!article) {
          this.redirectToNoArticle();
          return EMPTY;
        }
        return of(article); // Trả về Article (không undefined)
      }),
      catchError(() => {
        this.redirectToNoArticle();
        return EMPTY
      })
    )
  }

  private redirectToNoArticle() {
    this.router.navigate(['/articles/no-article']);
  }
}
