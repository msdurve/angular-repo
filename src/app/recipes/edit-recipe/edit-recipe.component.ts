import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormGroupName, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  id:number ; 
  isEdit = false ;

  editRecipeForm : FormGroup; 
  
  recipe : Recipe;  
  ingredientsForm : FormArray  ; 

  constructor(private route :ActivatedRoute , private recipeService : RecipeService) { }

  ngOnInit() {

  
  this.editForm(); 
   this.route.params.subscribe(
     (params : Params) => {
        this.id = +params['id'] ; 
        this.isEdit = params['id'] != null ;
        this.ingredientsForm = new FormArray([]);
        console.log(this.isEdit);
        if(this.isEdit){
          this.recipe = this.recipeService.getRecipe(this.id) ; 
          console.log("Selected Recipe for Edit :" + this.recipe) ;
          this.editForm() ;  
      }
     }
   )
  }
  addIngredients(){
    (<FormArray>this.editRecipeForm.get('ingredients')).push(
      new FormGroup({
        'name' : new FormControl(null , Validators.required) , 
        'amount' : new FormControl(null , Validators.required)
      })
    )
  }

  private editForm(){

    if(this.isEdit){
        const name = this.recipe.name ; 
        const imageUrl = this.recipe.imagePath ; 
        const description = this.recipe.description ; 
        let  recipeIngredients = new FormArray([]) ; 
        
        if(this.recipe['ingredients']){   // 
          for(let ingredient of this.recipe.ingredients){
            recipeIngredients.push(new FormGroup({
                'name' : new FormControl(ingredient.name , Validators.required),
                 'amount' : new FormControl(ingredient.amount , 
                  [
                    Validators.required , 
                    Validators.pattern(/^[1-9]+[0-9]*$/)
                    
                  ]
                  ) 
            })) ; 
          }
        }

        this.editRecipeForm = new FormGroup({
        'name' : new FormControl(name , Validators.required) , 
        'imagePath' : new FormControl(imageUrl , Validators.required) , 
        'description' : new FormControl(description , Validators.required)  , 
        'ingredients' : recipeIngredients
      });
    }
    else{
      this.editRecipeForm = new FormGroup({
        'name' : new FormControl(null , Validators.required) , 
        'imagePath' : new FormControl(null , Validators.required) , 
        'description' : new FormControl(null  , Validators.required)  , 
        'ingredients' : new FormArray([])
      });
    }
  }

  onSubmit(){
    console.log(this.editRecipeForm.value);
    if(this.isEdit){
      this.recipeService.updateRecipe(this.id , this.editRecipeForm.value) ;
    }
    else{
      this.recipeService.addNewRecipe(this.editRecipeForm.value);
    }
  }

}
