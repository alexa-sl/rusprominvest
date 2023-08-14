import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MainLayoutComponent} from "./shared/main-layout/main-layout.component";
import {ServicesComponent} from "./services/services.component";
import {MainPageComponent} from "./main-page/main-page.component";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {path: '', redirectTo: '/', pathMatch: "full"},
      {path: '', component: MainPageComponent},
      {path: 'services', component: ServicesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
