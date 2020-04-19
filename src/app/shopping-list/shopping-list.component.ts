import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  
  ingredients  : Ingredient[]= [
    new Ingredient('Poha' , 1 ), 
    new Ingredient('Onion' , 2)  
  ] ; 
  constructor() { }

  ngOnInit() {
  }
  
  onAddIngredient(recipeIngredient : Ingredient){
    this.ingredients.push(recipeIngredient); 
    console.log(this.ingredients.length);
  } 
}
