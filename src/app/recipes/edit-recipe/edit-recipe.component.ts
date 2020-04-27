import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  id:number ; 
  isEdit = false ;

  constructor(private route :ActivatedRoute) { }

  ngOnInit() {
   this.route.params.subscribe(
     (params : Params) => {
        this.id = +params['id'] ; 
        this.isEdit = params['id'] != null ;
        console.log(this.isEdit);
     }
   )
  }

}
