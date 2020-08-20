import { Component, Output ,EventEmitter } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service'; 
import { HttpResponse } from '@angular/common/http'; 
import { Recipe } from '../recipes/recipe.model';


@Component({
    selector:'app-header',
    templateUrl:'./header.component.html' ,
    styleUrls : ['./header.component.css'] 
})
export class HeaderComponent{    

    @Output() onHeaderClick = new EventEmitter<string>();
    
    constructor(private recipeService : RecipeService){}

    onHeaderClickEvent(selectEl : string){
        console.log(selectEl);
       this.onHeaderClick.emit(selectEl);     
    }
    
    onSaveRecipeToServer(){
        this.recipeService.saveRecipeToServer().subscribe(
            (response) => {
                console.log(response) ;  
            }
        )
    }

    fetchRecipeFromServer(){
        this.recipeService.getRecipeFromServer().subscribe(
        recipes => {
            console.log(recipes); 
            this.recipeService.setRecipes(recipes);
        }

            );
    }

}