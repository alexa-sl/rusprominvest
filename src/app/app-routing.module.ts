import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MainLayoutComponent} from "./shared/main-layout/main-layout.component";
import {ServicesPageComponent} from "./services-page/services.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {AboutUsPageComponent} from "./about-us-page/about-us-page.component";
import {FaqPageComponent} from "./faq-page/faq-page.component";
import {ContactsPageComponent} from "./contacts-page/contacts-page.component";
import {AdminComponent} from "./admin/admin.component";

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
      {path: 'admin', component: AdminComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
