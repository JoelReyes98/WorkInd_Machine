import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { mainModule } from 'process';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() toggle: EventEmitter<null> = new EventEmitter();

  toggleSidebar_main(){
    this.toggle.emit();
  }

}
