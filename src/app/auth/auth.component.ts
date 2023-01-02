import { HttpClient } from "@angular/common/http";
import { Component, Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
  })
  @Injectable({
    providedIn: 'root'
  })
export class AuthComponent{

  public isLoggedIn = false;

  constructor(private http: HttpClient, private route: Router){}

  onSignUp(form:NgForm){
    return this.http.post("http://localhost:8081/signUp", {
      "email": form.value.email,
      "password": form.value.password
    }).subscribe(response=> {
      this.route.navigate(['longURL']);
      this.isLoggedIn = true;
      console.log(response);
    });
  }

}