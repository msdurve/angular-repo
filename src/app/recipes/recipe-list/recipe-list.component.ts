import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = [
    
      new Recipe('Poha' , 'Simple Onion Poha Recipe' , 'https://c.ndtvimg.com/2019-08/7m027um_kanda-poha_625x300_14_August_19.jpg'),
      new Recipe('Poha' , 'Simple Onion Poha Recipe' , 'https://c.ndtvimg.com/2019-08/7m027um_kanda-poha_625x300_14_August_19.jpg')

     
  ];

  constructor() { }

  ngOnInit() {
  }

}
