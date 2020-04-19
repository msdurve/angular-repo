import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  
  recipeIngredient : Ingredient;  
  @Output() addRecipeIngredient = new EventEmitter<Ingredient>(); 
  constructor() { } 
  
  ngOnInit() {
  }
  onAddToList(nameInput:HTMLInputElement ,amountInput:HTMLInputElement, ){
    console.log(nameInput.value +"  and " + amountInput.value); 
    this.addRecipeIngredient.emit(new Ingredient(nameInput.value, parseInt(amountInput.value ))); 
  }

}
