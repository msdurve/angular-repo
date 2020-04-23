import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


export class RecipeService{
 
    recipeSelected = new EventEmitter<Recipe>()  ; 

    recipes: Recipe[] = [
        new Recipe('Poha Recipe' , 'Simple Onion Poha Recipe' , 'https://c.ndtvimg.com/2019-08/7m027um_kanda-poha_625x300_14_August_19.jpg'
            ,[new Ingredient('Poha' , 1 ) , new Ingredient('Sev' , 1)]),
        new Recipe('Samosa Recipe' , 'Simple Onion Samosa Recipe' , 
        'https://media.gettyimages.com/photos/closeup-of-plate-of-samosa-with-tomato-sauce-picture-id548301937?s=612x612',
        [new Ingredient('Potaot' , 3 ) , new Ingredient('Chilly' , 2 )] )
    ];     

    

}