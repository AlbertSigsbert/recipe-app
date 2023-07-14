import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {


  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Chorizo & Mozzarella Gnocchi',
  //     'Upgrade cheesy tomato pasta with gnocchi, chorizo and mozzarella for a comforting bake that makes an excellent midweek meal',
  //     'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
  //     [
  //       new Ingredient('Chorizo', 1),
  //       new Ingredient('Mozzarella', 2),
  //       new Ingredient('Gnocchi', 3),
  //     ]
  //   ),
  //   new Recipe(

  //     'Dum Aloo',
  //     'Dum Aloo is a North Indian curried dish where baby potatoes are steam cooked in a delicious gravy',
  //     'https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&webp=true&resize=375,341',
  //     [
  //       new Ingredient('Potatoes', 10),
  //       new Ingredient('Onions',4),
  //       new Ingredient('Tomatoes', 4)
  //     ]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  recipesChanged = new Subject<Recipe[]>();
  
  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipeToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(id: number, newRecipe: Recipe) {
    this.recipes[id] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
