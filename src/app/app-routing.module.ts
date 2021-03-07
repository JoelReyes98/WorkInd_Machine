import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from './Components/App/app-home/app-home.component';
import { DashboardComponent } from './Components/Pages/dashboard/dashboard.component';
import { Error404Component } from './components/error404/error404.component';
import { GeneralSettingsComponent } from './Components/Pages/general-settings/general-settings.component';
import { AppPresentationComponent} from './Components/App/app-presentation/app-presentation.component';
import { AppLoginComponent } from './Components/App/app-login/app-login.component';
import { AppNewAccountComponent } from './Components/App/app-new-account/app-new-account.component';

const routes: Routes = [
  { path: '', component:AppPresentationComponent},
  { path: 'login', component:AppLoginComponent},
  { path: 'newAccount', component: AppNewAccountComponent},
  { path: 'home', component: AppHomeComponent,
    children:[
      {path: '', component: DashboardComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'Settings', component: GeneralSettingsComponent},
    ]
  },
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
