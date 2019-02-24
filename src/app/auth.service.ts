import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(e) {
    const url = 'http://recipe.test/api/auth/login';

    const httpHeaders = {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    };
    const body = {
      email: e.srcElement[0].value,
      password: e.srcElement[1].value,
      remember_me: e.srcElement[2].checked
    };

    const fetchData = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: httpHeaders
    };

    fetch(url, fetchData)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        localStorage.RecipeAccessToken = response.access_token;
        localStorage.token_type = response.token_type;
      })
      .catch((error) => console.error(error));
  }

  logout() {
    const url = 'http://recipe.test/api/auth/logout';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: 'Bearer ' + localStorage.RecipeAccessToken
      })
    };
    const logout = this.http.get(url, httpOptions);
    logout.subscribe(data => console.log(data));

    localStorage.RecipeAccessToken = '';
    localStorage.token_type = '';
  }

  signup(e) {
    const url = 'http://recipe.test/api/auth/signup';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      })
    };
    const signup = this.http.post(url, e, httpOptions);
    signup.subscribe(data => console.log(data));
    // const addRequest = this.http.post(url, body1, httpOptions);
    // addRequest.subscribe();



  }
}
