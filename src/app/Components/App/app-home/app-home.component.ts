import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class AppHomeComponent implements OnInit {

  private isDark = false;

  sidenav_toggle = false;
  
  sidenav_main_toggle(){
    this.sidenav_toggle = !this.sidenav_toggle;
  }

  @HostBinding('class')
  get themeMode(){
    return this.isDark ? 'dark-theme' : 'light-theme';
  }

  switchDarkMode(isDarkMode: boolean){
    this.isDark = isDarkMode;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
