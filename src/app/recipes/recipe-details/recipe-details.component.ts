import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
 
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipeDetailsEl : Recipe ;

  constructor(private slService : ShoppingListService) {
    console.log("Selected Recipe is @@ : " +  this.recipeDetailsEl);
   }

  ngOnInit() {
    console.log("--------->" + this.slService.getIngredients().forEach(function(value){
    }));
  }
  
  toShoppingList(){
    // for(let i=0 ; i < this.recipeDetailsEl.ingredients.length ; i++){
    //    const localIng = new Ingredient(this.recipeDetailsEl.ingredients[i].name , this.recipeDetailsEl.ingredients[i].amount) ; 
    //    this.slService.addIngredients(localIng);
    // }
    this.slService.addIngredientsFromRecipe(this.recipeDetailsEl.ingredients); 
  }
}
