import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-main',
  templateUrl: './sidebar-main.component.html',
  styleUrls: ['./sidebar-main.component.scss']
})
export class SidebarMainComponent implements OnInit {

  constructor() { 
  }

  dark_theme_mode: boolean = false;

  ngOnInit(){
  }
  
  @Input('dark_theme_mode') dark_mode: boolean;
  @Input() toggle_sidenav: boolean;
  
  showFiller = false;

}
