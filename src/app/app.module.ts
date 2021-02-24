import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Components/App/app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SidebarMainComponent } from './Components/sidebar-main/sidebar-main.component';
import { SidebarToolsComponent } from './Components/sidebar-tools/sidebar-tools.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material//
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

//Igx Avatar
import { IgxAvatarModule } from 'igniteui-angular';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarMainComponent,
    SidebarToolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    IgxAvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
