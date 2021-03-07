import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { MatSlideToggleChange, MatSlideToggleModule} from '@angular/material/slide-toggle';
import { changei18n } from 'igniteui-angular';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  darkTheme: boolean = false;

  constructor() { }

  ngOnInit(){
  }

  @Output() toggle: EventEmitter<null> = new EventEmitter();
  @Output() readonly darkModeSwitch = new EventEmitter<boolean>();

  toggleSidebar_main(){
    this.toggle.emit();
  }
  
  onDarkTheme({ checked }: MatSlideToggleChange){
    this.darkModeSwitch.emit(checked);
  }
 
}
