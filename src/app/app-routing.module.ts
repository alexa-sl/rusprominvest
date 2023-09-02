import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MainLayoutComponent} from "./shared/main-layout/main-layout.component";
import {ServicesPageComponent} from "./services-page/services.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {AboutUsPageComponent} from "./about-us-page/about-us-page.component";
import {FaqPageComponent} from "./faq-page/faq-page.component";
import {ContactsPageComponent} from "./contacts-page/contacts-page.component";
import {AdminComponent} from "./admin/admin.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AuthGuard} from "./helpers/auth.guard";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {path: '', redirectTo: '/', pathMatch: "full"},
      {path: '', component: MainPageComponent},
      {path: 'about-us', component: AboutUsPageComponent},
      {path: 'faq', component: FaqPageComponent},
      {path: 'services', component: ServicesPageComponent},
      {path: 'contacts', component: ContactsPageComponent},
      {path: 'insideLoginUser', component: LoginComponent},
      {path: 'insideCreateNewUser', component: RegisterComponent, canActivate: [AuthGuard]},
      {path: 'insideGetOrders', component: AdminComponent},
      {path: '**', component: PageNotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
