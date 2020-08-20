import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/drondown.directive';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRouting } from './app-route.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms' ; 
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
 
import {AngularFireModule } from '@angular/fire' ; 
import {AngularFirestoreModule} from '@angular/fire/firestore'
import {AngularFireAuthModule, AngularFireAuth} from '@angular/fire/auth' ; 

import {environment} from   '../environments/environment'  ; 
import { AuthService } from './auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    EditRecipeComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,AppRouting,FormsModule ,ReactiveFormsModule,HttpClientModule 
  ],
  providers: [RecipeService , ShoppingListService , AuthService] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
