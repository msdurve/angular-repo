import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
 
})
export class RecipeDetailsComponent implements OnInit {
   //@Input() recipeDetailsEl : Recipe ;
   recipeDetailsEl : Recipe ;
   inputID : number ; 
  
  constructor(private slService : ShoppingListService  , 
    private recipeService : RecipeService , 
    private activatedRouter : ActivatedRoute) {
    //console.log("Selected Recipe is @@ : " +  this.recipeDetailsEl);
     //console.log("Selected Recipe : " + this.activatedRouter.snapshot.params['id']) ; 
   }

  ngOnInit() {
    
    // console.log("--------->" + this.slService.getIngredients().forEach(function(value){
    // }));

    this.activatedRouter.params.subscribe(
       (params : Params ) => {
         this.inputID = +params['id']; 
         this.recipeDetailsEl = this.recipeService.getRecipe(+params['id']) ; 
       } 
    )
    
    console.log (this.activatedRouter.snapshot.params['id'] )
  }
  
  toShoppingList(){
    // for(let i=0 ; i < this.recipeDetailsEl.ingredients.length ; i++){
    //    const localIng = new Ingredient(this.recipeDetailsEl.ingredients[i].name , this.recipeDetailsEl.ingredients[i].amount) ; 
    //    this.slService.addIngredients(localIng);
    // }
     this.slService.addIngredientsFromRecipe(this.recipeDetailsEl.ingredients); 
  }
}
