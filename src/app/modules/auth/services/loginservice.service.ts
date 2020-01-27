import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router, CanActivate } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserService } from '../../users/services/user.service';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService implements CanActivate {


  constructor(private auth: AngularFireAuth, private router: Router, private user: UserService) {
    this.auth.authState.subscribe(user => {
      this.user.saveUser(user);
    });
  }

  loginWithGoogle() {
    return this.auth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logoutwithgoogle() {
    this.auth.auth.signOut();
    this.router.navigate(['/']);
  }
  getCurrentUser() {
    return this.auth.authState;
  }
  canActivate() {
    return this.auth.authState.pipe(
      map((user) => {
        if (user) return true
        else {

          this.router.navigate(['/login']);
          return false;
        }
      })
    )
  }
}
