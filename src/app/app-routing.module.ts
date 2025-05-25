import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./ng-router/home/home.component";
import {ArticlesGuard} from "./ng-router/guard/articles.guard";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignInRfComponent} from "./sign-in-rf/sign-in-rf.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'articles', loadChildren: () => import("./ng-router/articles/articles.module").then(m => m.ArticlesModule) , canActivate:[ArticlesGuard]},
  {path:'sign-in',component:SignInComponent},
  {path:'sign-in-rf',component:SignInRfComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
