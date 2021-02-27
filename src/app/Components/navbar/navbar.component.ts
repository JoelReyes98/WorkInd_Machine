import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { MatSlideToggleChange} from '@angular/material/slide-toggle';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  darkTheme: boolean = false;

  constructor() { }

  ngOnInit(){
    this.darkTheme = localStorage.getItem('theme') === "Dark" ? true : false;   
  }

  @Output() toggle: EventEmitter<null> = new EventEmitter();
  @Output() toggleChange: EventEmitter<boolean> = new EventEmitter(this.darkTheme);
  
  toggleSidebar_main(){
    this.toggle.emit();
  }

  darkMode(){
    localStorage.setItem('theme',this.darkTheme ? "Dark" : "Light")
    this.toggleChange.emit();
  }

  
 
}
