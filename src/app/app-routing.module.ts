import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Error404Component } from './components/error404/error404.component';
import { GeneralSettingsComponent } from './components/general-settings/general-settings.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'User/Settings', component: GeneralSettingsComponent}, 
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
