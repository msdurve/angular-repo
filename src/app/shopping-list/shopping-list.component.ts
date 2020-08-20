import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    
    ingredients : Ingredient[] = [] ; 
  
  // ingredients  : Ingredient[]= [
  //   new Ingredient('Poha' , 1 ), 
  //   new Ingredient('Onion' , 2)  
  // ] ; 
  constructor(private shoppingService : ShoppingListService ) { }

  ngOnInit() {
   
    this.ingredients = this.shoppingService.getIngredients() ;
   
    this.shoppingService.ingredientAdded.subscribe(
      (ingredients:Ingredient[]) => {
        this.ingredients = ingredients;  
      }
    )
    console.log("inint : " + this.ingredients.length)  ; 
  }
  
  // onAddIngredient(recipeIngredient : Ingredient){
  //    this.ingredients.push(recipeIngredient); 
  //    console.log(this.ingredients.length);

  // } 

  onItemSelected(input : number){
    this.shoppingService.serviceSubject.next(input)  ; 
  }
}
