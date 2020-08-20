import { Component, OnInit, Output, EventEmitter, ViewChild, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import  { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy {
  editMode = false ;
  i : number;
  recipeIngredient : Ingredient;  
  ingredientEdit : Ingredient ;
  @ViewChild('f',{static:false}) inputForm : NgForm  ;

  subscription : Subscription ;

  //@Output() addRecipeIngredient = new EventEmitter<Ingredient>(); 
  constructor(private slService : ShoppingListService ) { } 
  
  ngOnInit() {
    this.subscription = this.slService.serviceSubject.subscribe(
      (input:number)=>{
        this.editMode = true ;
        this.i = input ;
         this.ingredientEdit  = this.slService.getIngredient(this.i) ; 
        this.inputForm.setValue({
           name:this.ingredientEdit.name ,
           amount:this.ingredientEdit.amount
        })
      }
    )
  }
  onAddToList( inputForm : NgForm ){
     //console.log(nameInput.value +"  and " + amountInput.value); 
     console.log(inputForm);
     const nameInput  = inputForm.value.name ; 
     const amountInput = inputForm.value.amount ; 
     // this.addRecipeIngredient.emit(new Ingredient(nameInput.value, parseInt(amountInput.value ))); 
     if(this.editMode === false){
       this.slService.addIngredients(new Ingredient(nameInput, parseInt(amountInput )));
     }
     else{
     //this.slService.addIngredients(new Ingredient(nameInput, parseInt(amountInput )));
      this.slService.updateIngredient(this.i , new Ingredient(nameInput, parseInt(amountInput )) ) ; 
      this.inputForm.reset() ;
      this.editMode = false ;
     }
  }
  
  ngOnDestroy()
  {
    this.subscription.unsubscribe(); 
  }  
}
 