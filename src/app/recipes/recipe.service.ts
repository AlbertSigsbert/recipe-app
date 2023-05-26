import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'
    ),
    new Recipe(
      'Test Recipe 2',
      'Test Recipe',
      'https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&webp=true&resize=375,341'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
