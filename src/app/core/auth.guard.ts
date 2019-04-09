import { Injectable } from '@angular/core'; 
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth'; 
import { LoginService } from '../login-register/login/login.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    public afAuth: AngularFireAuth,
    public userService: LoginService,
    private router: Router
  ) {}

  canActivate(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
      .then(user => {
        this.router.navigate(['/projects']);
        return resolve(false);
      }, err => {
        return resolve(true);
      });
    });
  }

}
