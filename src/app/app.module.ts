import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
 
//Components//
import { AppComponent } from './Components/App/app.component';
import { NavbarComponent } from './Components/Tools/navbar/navbar.component';
import { SidebarMainComponent } from './Components/Tools/sidebar-main/sidebar-main.component';
import { SidebarToolsComponent } from './Components/Tools/sidebar-tools/sidebar-tools.component';
import { DashboardComponent } from './Components/Pages/dashboard/dashboard.component';
import { GeneralSettingsComponent } from './Components/Pages/general-settings/general-settings.component';
import { Error404Component } from './components/error404/error404.component';
import { AppHomeComponent } from './Components/App/app-home/app-home.component';
import { AppLoginComponent } from './Components/App/app-login/app-login.component';
import { AppNewAccountComponent } from './Components/App/app-new-account/app-new-account.component';
import { AppPresentationComponent } from './Components/App/app-presentation/app-presentation.component';

//Angular Material//
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


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
    Error404Component,
    AppHomeComponent,
    AppLoginComponent,
    AppNewAccountComponent,
    AppPresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    IgxAvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
