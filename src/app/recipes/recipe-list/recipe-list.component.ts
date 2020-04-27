import { Component, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'] 
})
export class RecipeListComponent implements OnInit {
  
  // recipes: Recipe[] = [
  //     new Recipe('Poha' , 'Simple Onion Poha Recipe' , 'https://c.ndtvimg.com/2019-08/7m027um_kanda-poha_625x300_14_August_19.jpg'),
  //     new Recipe('Samosa' , 'Simple Onion Samosa Recipe' , 'https://media.gettyimages.com/photos/closeup-of-plate-of-samosa-with-tomato-sauce-picture-id548301937?s=612x612')
  // ];

   recipes : Recipe[] = [] ;    
  
  // @Output() onRecipeSelectEmitEl = new EventEmitter<Recipe>();

  constructor(private recipeService : RecipeService , private router : Router , private route :ActivatedRoute) { }
 
  ngOnInit() {
      this.recipes = this.recipeService.recipes; 
      console.log(this.recipeService.recipes);
  }
 
  onRecipeSelectList(recipe: Recipe){
    //this.onRecipeSelectEmitEl.emit(recipe);
    this.recipeService.recipeSelected.emit(recipe) ; 
  }
  
  createNewRecipe(){
    this.router.navigate(['new'] , {relativeTo : this.route , queryParams : {id:1} , fragment:'loading' });
  }
 }
