import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {TabPanelComponent} from "./tabs/tab-panel.component";
import {TabGroupComponent} from "./tabs/tab-group.component";
import {TabBsGroupComponents} from "./tabs/tab-bs-group.component";
import {CounterComponent} from "./tabs/tab-counter.component";
import {TabPanelDirective} from "./tabs/tab.directive";

@NgModule({
  declarations: [
    AppComponent,
    TabGroupComponent,
    TabPanelComponent,
    TabBsGroupComponents,
    CounterComponent,
    TabPanelDirective
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
