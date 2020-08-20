import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core'; 
import { Ingredient } from '../shared/ingredient.model';
import {HttpClient , HttpResponse} from '@angular/common/http' ; 
import { Subject } from 'rxjs';
import { map, toArray } from 'rxjs/operators' ;


@Injectable()
export class RecipeService{
  
    recipeSelected = new EventEmitter<Recipe>()  ; 
    recipeSubject = new Subject<Recipe[]>(); 
    
    constructor(private http : HttpClient){}

    recipes: Recipe[] = [
        new Recipe('Poha Recipe' , 'Simple Onion Poha Recipe' , 'https://c.ndtvimg.com/2019-08/7m027um_kanda-poha_625x300_14_August_19.jpg'
            ,[new Ingredient('Poha' , 1 ) , new Ingredient('Sev' , 1)]),
        new Recipe('Samosa Recipe' , 'Simple Onion Samosa Recipe' , 
        'https://media.gettyimages.com/photos/closeup-of-plate-of-samosa-with-tomato-sauce-picture-id548301937?s=612x612',
        [new Ingredient('Potaot' , 3 ) , new Ingredient('Chilly' , 2 )] )
    ];     


    getRecipe(id : number){
        return this.recipes[id] ;
    }
    
    addNewRecipe(recipe : Recipe){
        this.recipes.push(recipe);
        this.recipeSubject.next(this.recipes); 
    }

    updateRecipe(index:number , recipe:Recipe){
        this.recipes[index] = recipe;
        this.recipeSubject.next(this.recipes); 
    }
    
    saveRecipeToServer(){
          return  this.http.put('https://ng-recipe-book-67bc7.firebaseio.com/data.json' , this.recipes ) ;  
    }
    
    getRecipeFromServer(){
          return  this.http.get<Recipe[]>('https://ng-recipe-book-67bc7.firebaseio.com/data.json');
    }

 setRecipes(recipe : Recipe[]){
     this.recipes = recipe;
     this.recipeSubject.next(this.recipes); 
 }
    
}