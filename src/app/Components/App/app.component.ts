import { Component, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WorkInd Machine';

  @HostBinding('class') componentCssClass: any;

  sidenav_toggle = false;

  sidenav_main_toggle(){
    this.sidenav_toggle = !this.sidenav_toggle;
  }

  constructor(public overlayContainer: OverlayContainer){}
    
  public OnSetTheme (e:string){
    this.overlayContainer.getContainerElement().classList.add(e);
    this.componentCssClass = e;
  }

  
}
