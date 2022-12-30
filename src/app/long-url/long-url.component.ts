import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-long-url',
  templateUrl: './long-url.component.html',
  styleUrls: ['./long-url.component.css']
})
export class LongUrlComponent {

  constructor(private http: HttpClient){}

  onSubmit(form: NgForm){
    const value = form.value;
    const longURL = value.longurl;
    this.http.post('http://localhost:8081/shorten', {
      "longURL": "www.amazonlink.com"
    }).subscribe(
      response => {
        console.log(response);
      }
    );
  }

}
