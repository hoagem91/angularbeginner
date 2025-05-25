import {RouterModule, Routes} from "@angular/router";
import {ArticlesComponent} from "./articles.components";
import {ArticlesListComponent} from "./article-list.component";
import {ArticlesDetailComponent} from "./article-detail.component";
import {NgModule} from "@angular/core";
import {ArticlesGuard} from "../guard/articles.guard";
import {ArticlesDetailEditComponent} from "./articles-detail-edit/articles-detail-edit.component";
import {NoArticleComponent} from "./no-article/no-article.component";
import {ArticleResolvers} from "./resolvers/article.resolver";

const routes: Routes = [
  {path: "", component: ArticlesListComponent},
  {path:"no-articles", component: NoArticleComponent},
  {
    path: ":slug",
    canLoad: [ArticlesGuard],
    children: [
      {path: "", component: ArticlesDetailComponent,resolve:{
        article:ArticleResolvers
        }},
      {path:"edit",canDeactivate:[ArticlesGuard],component:ArticlesDetailEditComponent}
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {
}
