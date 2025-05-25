import {ArticlesListComponent} from "./article-list.component";
import {ArticlesDetailComponent} from "./article-detail.component";
import {ArticlesComponent} from "./articles.components";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ArticlesRoutingModule} from "./article-routing.module";
import { ArticlesDetailEditComponent } from './articles-detail-edit/articles-detail-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NoArticleComponent } from './no-article/no-article.component';

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticlesListComponent,
    ArticlesDetailComponent,
    ArticlesDetailEditComponent,
    NoArticleComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    ReactiveFormsModule,
  ],
})
export class ArticlesModule {
}
