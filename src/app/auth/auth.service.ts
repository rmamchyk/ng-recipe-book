import * as firebase from 'firebase';

export class AuthService {
    token: string;

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    signinUser(email: string, password: string) {
        //By calling this method the user token will be automatically stored 
        //on client side by firebase SDK in localStorage or IndexDB. 
        //So that we don't need to store this token manually.
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
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
