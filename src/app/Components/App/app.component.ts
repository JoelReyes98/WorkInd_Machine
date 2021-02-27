import { Component, HostBinding } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WorkInd Machine';

  sidenav_toggle = false;
  darkTheme = false;

  sidenav_main_toggle(){
    this.sidenav_toggle = !this.sidenav_toggle;
  }

  dark_theme(){
    this.darkTheme = !this.darkTheme;
  }

  constructor(){}
   
 
}
