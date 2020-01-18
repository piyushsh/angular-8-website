import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recepies: Recipe[] = [
    new Recipe("Recipe-1", "This is a test recipe 1.", "https://www.foodnetwork.com/recipes/ree-drummond/italian-chicken-sheet-pan-supper-5271106")
  ];

  constructor() { }

  ngOnInit() {
  }

}
