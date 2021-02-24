import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workind-machine';

  sidenav_toggle = false;

  sidenav_main_toggle(){
    this.sidenav_toggle = !this.sidenav_toggle;
  }
}
