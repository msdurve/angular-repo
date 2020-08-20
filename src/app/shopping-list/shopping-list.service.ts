import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingListService{
    ingredientAdded = new EventEmitter<Ingredient[]>() ; 
    serviceSubject = new Subject<number>() ; 

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

    getIngredient(index:number){
        return this.ingredients[index] ; 
    }

    updateIngredient(index:number,newIngredients : Ingredient){
        console.log("in update") ; 
        this.ingredients[index] = newIngredients ;  
        console.log(this.ingredients[index]) ; 
        this.ingredientAdded.emit(this.ingredients) ; 
    }
}