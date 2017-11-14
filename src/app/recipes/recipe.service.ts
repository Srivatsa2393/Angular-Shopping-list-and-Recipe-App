import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Gobi Manchurian', 
            'This is a simple test', 
            'http://vegetarianindianrecipes.com/wp-content/uploads/2016/09/gobi-manchurian-recipe-8.jpg',
            [
                new Ingredient('Cauliflower', 1),
                new Ingredient('French Fries', 20),
                new Ingredient('Onion', 2)
            ]
        ),
        new Recipe(
            'Pani Puri', 
            'This is a simple test', 
            'https://upload.wikimedia.org/wikipedia/commons/5/53/Panipuri%2C_Golgappa%2C_Phuchka.jpg', 
            [
                new Ingredient('Puri', 6),
                new Ingredient('Chick Peas', 50),
                new Ingredient('Tamrind', 2)
            ]
        )
      ];


    getRecipes() {
        return this.recipes.slice();
    }
}