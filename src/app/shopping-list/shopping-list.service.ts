import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService{
    ingredientAdded = new EventEmitter<Ingredient[]>() ; 
    private ingredients  : Ingredient[]= [
        new Ingredient('Poha' , 1 ), 
        new Ingredient('Onion' , 2)  
      ] ; 
   
      getIngredients(){
        return this.ingredients ; 
    }

    addIngredients(recipeIngredient : Ingredient){
        console.log("in service") ; 
        this.ingredients.push(recipeIngredient) ;  
        this.ingredientAdded.emit(this.ingredients.slice());
    } 
    addIngredientsFromRecipe(ingredient : Ingredient[]){
        console.log(ingredient.length) ; 
        this.ingredients.push(...ingredient);
        console.log('gaddg' + ingredient.length); 
        this.ingredientAdded.emit(this.ingredients);
    }
}