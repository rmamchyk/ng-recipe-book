import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild('f') signinForm;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignin() {
    const email = this.signinForm.value.email;
    const password = this.signinForm.value.password;
    this.authService.signinUser(email, password);
  }

}
