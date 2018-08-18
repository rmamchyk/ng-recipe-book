import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import * as firebase from 'firebase';
import { from } from 'rxjs';

import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private router: Router) {}

    @Effect() // it will listen to any action in our app
    authSignup = this.actions$
        .ofType(AuthActions.TRY_SIGNUP)
        .pipe(
            map((action: AuthActions.TrySignup) => {
                return action.payload;
            }),
            switchMap((authData: {username: string, password: string}) => {
                return from(firebase.auth()
                    .createUserWithEmailAndPassword(authData.username, authData.password));
            }),
            switchMap(() => {
                return from(firebase.auth().currentUser.getIdToken());
            }),
            mergeMap((token: string) => { // dispatching two actions: SIGNUP and SET_TOKEN
                this.router.navigate(['/']);
                return [
                    { type: AuthActions.SIGNUP },
                    { type: AuthActions.SET_TOKEN, payload: token}
                ]
            })
        );

    @Effect()
    authSignin = this.actions$
        .ofType(AuthActions.TRY_SIGNIN)
        .pipe(
            map((action: AuthActions.TrySignin) => {
                return action.payload;
            }),
            switchMap((authData: {username: string, password: string}) => {
                return from(firebase.auth()
                    .signInWithEmailAndPassword(authData.username, authData.password));
            }),
            switchMap(() => {
                return from(firebase.auth().currentUser.getIdToken());
            }),
            mergeMap((token: string) => {
                this.router.navigate(['/']);
                return [
                    { type: AuthActions.SIGNIN },
                    { type: AuthActions.SET_TOKEN, payload: token }
                ]
            })
        );

    @Effect()
    authLogout = this.actions$
        .ofType(AuthActions.TRY_LOGOUT)
        .pipe(
            switchMap((action: AuthActions.TryLogout) => {
                return from(firebase.auth().signOut());
            }),
            map(() => {
                this.router.navigate(['/']);
                return {type: AuthActions.LOGOUT};
            })
        );
}