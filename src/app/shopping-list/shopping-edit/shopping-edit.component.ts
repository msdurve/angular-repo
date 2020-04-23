import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  
  recipeIngredient : Ingredient;  
  //@Output() addRecipeIngredient = new EventEmitter<Ingredient>(); 
  constructor(private slService : ShoppingListService) { } 
  
  ngOnInit() {
  }
  onAddToList(nameInput:HTMLInputElement ,amountInput:HTMLInputElement, ){
     console.log(nameInput.value +"  and " + amountInput.value); 
     // this.addRecipeIngredient.emit(new Ingredient(nameInput.value, parseInt(amountInput.value ))); 
     this.slService.addIngredients(new Ingredient(nameInput.value, parseInt(amountInput.value )));
  }

}
