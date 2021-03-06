import { Component, OnInit } from '@angular/core';
import { uptime } from 'process';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sign_up_mode = false;

  sign_in(){
    this.sign_up_mode = false;
  }

  sign_up(){
    this.sign_up_mode = true;
  }

}
