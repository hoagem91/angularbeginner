import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import {CommonModule} from "@angular/common";
import { DatabindingComponent } from './databinding/databinding.component';
import {FormsModule} from "@angular/forms";
import { NgifComponent } from './ngif/ngif.component';
import {HelloComponent} from "./ngif/hello.component";
import { NgForComponent } from './ngFor/ng-for.component';
import { ClassStyleComponent } from './class-style/class-style.component';
import {ProgressBarComponent} from "./inputbinding/progress-bar.component";
import {AuthorsListComponent} from "./authors/authors-list.component";
import {AuthorsDetailComponent} from "./authors/authors-detail/authors-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    // IntroComponent,
    DatabindingComponent,
    NgifComponent,
    HelloComponent,
    NgForComponent,
    ClassStyleComponent,
    ProgressBarComponent,
    AuthorsListComponent,
    AuthorsDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
