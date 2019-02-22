import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  handleLogin(e) {
    const url = 'http://recipe.test/api/auth/login';

    const httpHeaders = {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    };

    const body1 = {
      email: e.srcElement[0].value,
      password: e.srcElement[1].value,
      remember_me: false
    };

    const fetchData = {
      method: 'POST',
      body: JSON.stringify(body1),
      headers: httpHeaders
    };

    fetch(url, fetchData)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        localStorage.RecipeAccessToken = response.access_token;
        localStorage.token_type = response.token_type;
      })
      .catch((error) => console.error(error))


  }
}
