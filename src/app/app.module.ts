import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import {AppRoutingModule} from "./app-routing.module";
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import {ServicesPageComponent} from './services-page/services.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import {NgOptimizedImage} from "@angular/common";
import {ImageSliderModule} from "./shared/image-slider/image.slider/image.slider.module";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainLayoutComponent,
    ServicesPageComponent,
    FaqPageComponent,
    ContactsPageComponent,
    AboutUsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    ImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
