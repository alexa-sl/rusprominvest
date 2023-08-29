import {isDevMode, NgModule} from '@angular/core';
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
import { OrderFormComponent } from './shared/order-form/order-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from "./register/register.component";
import {provideState, provideStore} from "@ngrx/store";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {authFeatureKey, authReducer} from "./auth/store/reducers/reducers";
import * as authEffects from "./auth/store/effects";
import {provideEffects} from "@ngrx/effects";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainLayoutComponent,
    ServicesPageComponent,
    FaqPageComponent,
    ContactsPageComponent,
    AboutUsPageComponent,
    OrderFormComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    ImageSliderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideStore(),
    provideState(authFeatureKey, authReducer),
    provideEffects(authEffects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
