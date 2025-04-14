import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TabPanelComponent} from "./tabs/tab-panel.component";
import {TabGroupComponent} from "./tabs/tab-group.component";
import {TabBsGroupComponents} from "./tabs/tab-bs-group.component";
import {CounterComponent} from "./tabs/tab-counter.component";
import {TabPanelDirective} from "./tabs/tab.directive";
import {PipeComponent} from "./pipes/apppipe.component";
import {FormatAddressPipe} from "./pipes/format-address.pipe";
import {AppRxJSComponent} from "./RxJS/rxjsconcepts.component";
import {AppObservable} from "./RxJS/filtering.component";
import {CombinationComponent} from "./RxJS/combination.component";
import {ErrorHandingComponent} from "./RxJS/errorhanding.component";
import {HigherOderObs} from "./RxJS/litteObs.component";
import {RunnerComponent} from "./RxJS/runner.component";
import {SubjectComponent} from "./RxJS/subject.component";

@NgModule({
  declarations: [
    AppComponent,
    TabGroupComponent,
    TabPanelComponent,
    TabBsGroupComponents,
    CounterComponent,
    TabPanelDirective,
    PipeComponent,
    FormatAddressPipe,
    AppRxJSComponent,
    AppObservable,
    CombinationComponent,
    ErrorHandingComponent,
    HigherOderObs,
    RunnerComponent,
    SubjectComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
