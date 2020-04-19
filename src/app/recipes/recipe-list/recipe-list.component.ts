import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = [
      new Recipe('Poha' , 'Simple Onion Poha Recipe' , 'https://c.ndtvimg.com/2019-08/7m027um_kanda-poha_625x300_14_August_19.jpg'),
      new Recipe('Samosa' , 'Simple Onion Samosa Recipe' , 'https://media.gettyimages.com/photos/closeup-of-plate-of-samosa-with-tomato-sauce-picture-id548301937?s=612x612')
  ];
  
 @Output() onRecipeSelectEmitEl = new EventEmitter<Recipe>();
 constructor() { }
  ngOnInit() {
  
  }
  onRecipeSelectList(recipe: Recipe){
    this.onRecipeSelectEmitEl.emit(recipe);
  }
  


}
