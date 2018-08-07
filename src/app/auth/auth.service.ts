import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router) {}

    isAuthenticated() {
        return this.token != null;
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
    }

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(response => {})
            .catch(error => console.log(error));
    }

    signinUser(email: string, password: string) {
        //By calling this method the user token will be automatically stored 
        //on client side by firebase SDK in localStorage or IndexDB. 
        //So that we don't need to store this token manually.
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                this.router.navigate(['/']);
                firebase.auth().currentUser.getIdToken()
                    .then((token: string)=> this.token = token)
            })
            .catch(error => console.log(error));
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then((token: string) => this.token = token);
        return this.token;
    }
}
