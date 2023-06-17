import { EventEmitter, Injectable} from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn:'root'
 })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Chorizo & Mozzarella Gnocchi',
      'Upgrade cheesy tomato pasta with gnocchi, chorizo and mozzarella for a comforting bake that makes an excellent midweek meal',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
      [
        new Ingredient('Chorizo', 1),
        new Ingredient('Mozzarella', 2),
        new Ingredient('Gnocchi', 3),
      ]
    ),
    new Recipe(
  
      'Dum Aloo',
      'Dum Aloo is a North Indian curried dish where baby potatoes are steam cooked in a delicious gravy',
      'https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&webp=true&resize=375,341',
      [
        new Ingredient('Potatoes', 10),
        new Ingredient('Onions',4),
        new Ingredient('Tomatoes', 4)
      ]
    ),
  ];

  constructor(private slService:ShoppingListService){}


  getRecipes() {
    return this.recipes.slice();
  }

   getRecipe(index:number) {
     return this.recipes[index];
  }
  
  addRecipeToShoppingList(ingredients:Ingredient []){
    this.slService.addIngredients(ingredients);
  }
}
