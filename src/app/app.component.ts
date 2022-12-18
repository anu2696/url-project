import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() loadedFeature = 'url';

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }

 // title = 'url-project';
}
