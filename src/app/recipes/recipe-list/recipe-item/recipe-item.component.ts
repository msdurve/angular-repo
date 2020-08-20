import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('element') recipe : Recipe ; 
  @Input() index : number ; 
  
  constructor(private router : Router ) { }
  
  ngOnInit() {
    console.log(this.recipe)
    console.log("index : " + this.index) ; 
  }

  showRecipeDetails(){
    
  }
  
}
