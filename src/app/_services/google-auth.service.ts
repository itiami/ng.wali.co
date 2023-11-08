import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, User } from "@angular/fire/auth";
import firebase from 'firebase/compat/app';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {

  constructor(public afAuth: AngularFireAuth) { }


  authLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider);
  }


  doGithubLogin() {
    return this.authLogin(new GithubAuthProvider());
  }

  doFacebookLogin() {
    return this.authLogin(new FacebookAuthProvider());
  }

  doTwitterLogin() {
    return this.authLogin(new TwitterAuthProvider());
  }

  doGoogleLogin() {
    return this.authLogin(new GoogleAuthProvider());
  }


  get isAuthenticated(): boolean {
    return this.afAuth.currentUser !== null;
  }



  doRegister(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Account Created");
      }).catch((err: any) => {
        console.log(err.message);
      });
  }


  async googleSignIn() {
    try {
      const result = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      return result;
    } catch (error) {
      console.error('Auth Service: login error', error);
      throw error;
    }
  }

  googleLogout() {
    return this.afAuth.signOut()
      .then(() => {
        localStorage.removeItem("gToken");
        console.log("Logout Successful");
      }).catch((err: any) => {
        console.log(err.message);
      });
  }



  checkLogin(): Promise<User> {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.onAuthStateChanged(function (user) {
        if (user) {
          console.log("Hi.. " + user.displayName, "Your are LoggedIn");
          resolve(user);
        } else {
          reject('No user logged in');
        }
      });
    });
  }


  getCurrentUser(): Promise<User> {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.onAuthStateChanged((user) => {
        if (user) {
          resolve(user)
        } else {
          reject("No User Logged In")
        }
      })
    });
  }


}