import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Gobi Manchurian', 'This is a simple test', 
              'http://vegetarianindianrecipes.com/wp-content/uploads/2016/09/gobi-manchurian-recipe-8.jpg'),
    new Recipe('Another test recipe by Srivatsa', 'This is a simple test', 
              'http://vegetarianindianrecipes.com/wp-content/uploads/2016/09/gobi-manchurian-recipe-8.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
