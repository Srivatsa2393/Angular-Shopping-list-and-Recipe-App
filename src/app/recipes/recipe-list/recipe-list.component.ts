import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Gobi Manchurian', 'This is a simple test', 
              'http://vegetarianindianrecipes.com/wp-content/uploads/2016/09/gobi-manchurian-recipe-8.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
