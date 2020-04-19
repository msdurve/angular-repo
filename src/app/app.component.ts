import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'my-first-app';
  selectedEl = 'Recipe' ;
  
  //Event Call Method 
  selectedComponent(selectedComponent : string){
    console.log("in selectedComponent") ;  
    this.selectedEl = selectedComponent; 
  }
}
