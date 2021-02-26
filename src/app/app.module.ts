import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//Components//
import { AppComponent } from './Components/App/app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SidebarMainComponent } from './Components/sidebar-main/sidebar-main.component';
import { SidebarToolsComponent } from './Components/sidebar-tools/sidebar-tools.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GeneralSettingsComponent } from './components/general-settings/general-settings.component';
import { Error404Component } from './components/error404/error404.component';

//Angular Material//
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


//Igx Avatar
import { IgxAvatarModule } from 'igniteui-angular';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarMainComponent,
    SidebarToolsComponent,
    DashboardComponent,
    GeneralSettingsComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    IgxAvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
