import { AuthInfo } from './../../../core/AuthInfo';
import { AuthService } from './../../../core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  SideBarToggled = "toggled";
  public $uid:string
  authInfo: AuthInfo;

  constructor(private authService:AuthService) {



  }

  ngOnInit() {


      this.authService.authInfo$.subscribe(authInfo =>  this.authInfo = authInfo);


  }
  toggleMenu(event) {
    this.SideBarToggled = this.SideBarToggled === 'toggled' ? '' : 'toggled';
 }

    logout() {
        this.authService.doLogout();
    }



}
