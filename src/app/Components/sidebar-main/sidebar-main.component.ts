import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-main',
  templateUrl: './sidebar-main.component.html',
  styleUrls: ['./sidebar-main.component.scss']
})
export class SidebarMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() toggle_sidenav: boolean;

  showFiller = false;

}
