import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'   ;
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

const routes : Routes   = [
    {path : '' ,  redirectTo :'recipe' , pathMatch: 'full' } ,
    {path : 'recipe' , component:RecipesComponent , children :[
        {path : '' , component : RecipeStartComponent},
        {path  : 'new' , component: EditRecipeComponent} , 
        {path : ':id' ,  component : RecipeDetailsComponent  } ,
        {path : ':id/edit' , component : EditRecipeComponent}   
        
    ] }  ,
    {path : 'shopping-list' , component:ShoppingListComponent} ,
    {path: 'signup' , component: SignupComponent}  ,
    {path : 'signin' , component:SigninComponent}

] ;

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ] , 
    exports:[
        RouterModule
    ]
})
export class AppRouting{

}