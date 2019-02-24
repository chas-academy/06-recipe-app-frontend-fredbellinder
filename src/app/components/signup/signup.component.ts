import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnChanges {

  constructor(private router: Router, private authService: AuthService) { }
  passwordTruthness = '';
  ngOnInit() {
  }

  ngOnChanges() {

  }
  handleSignup(e) {
    const bodySignup = {
      "name": e.target[0].value || 'anonymous',
      "email": e.target[1].value,
      "password": e.target[2].value === e.target[3].value ? e.target[2].value : 'fel!',
      "password_confirmation": e.target[3].value
    };
    if (bodySignup.password !== 'fel!') {

      this.authService.signup(bodySignup);
      this.router.navigateByUrl('');
    } else {
      this.router.navigateByUrl('signup');
      const passy = document.querySelector('#password_confirm');
      passy.removeAttribute('value');
      this.passwordTruthness = ' | Passwords don\'t no match';
    }

  }
}
