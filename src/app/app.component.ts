import { Component, OnInit } from '@angular/core';
import *  as firebse from 'firebase' ; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit { 
  title = 'my-first-app';
  selectedEl = 'Recipe' ;
  
  //Event Call Method 
  selectedComponent(selectedComponent : string){
    console.log("in selectedComponent") ;  
    this.selectedEl = selectedComponent; 
  }

  ngOnInit(){
    firebse.initializeApp({  
      apiKey: "AIzaSyDV_mjBX7URft_H9ER7637H4FRVMDY9hVA",
      authDomain: "ng-recipe-book-67bc7.firebaseapp.com",
    }) ;
  }  
}
