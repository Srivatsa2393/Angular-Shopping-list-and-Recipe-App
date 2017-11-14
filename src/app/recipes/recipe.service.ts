import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';


export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Gobi Manchurian', 'This is a simple test', 
                  'http://vegetarianindianrecipes.com/wp-content/uploads/2016/09/gobi-manchurian-recipe-8.jpg'),
        new Recipe('Another test recipe by Srivatsa', 'This is a simple test', 
                  'http://vegetarianindianrecipes.com/wp-content/uploads/2016/09/gobi-manchurian-recipe-8.jpg')
      ];


    getRecipes() {
        return this.recipes.slice();
    }
}