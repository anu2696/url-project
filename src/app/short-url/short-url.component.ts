import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent {


  constructor(private http: HttpClient){}

  //public val = {};

  onSubmitShort(form:NgForm){
    const value = form.value;
    const shortURL = value.shorturl;
    this.http.get('http://localhost:8081/long-url?short='+ shortURL).subscribe(
      response => {
        console.log(response);
        
      }
    );
    
  }
}
