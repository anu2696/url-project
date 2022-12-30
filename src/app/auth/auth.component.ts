import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
  })
export class AuthComponent{

  constructor(private http: HttpClient){}

  onSignUp(form:NgForm){
    return this.http.post("http://localhost:8081/signUp", {
      "email": form.value.email,
      "password": form.value.password
    }).subscribe(response=> {
      console.log(response);
    });
  }

}