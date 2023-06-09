import {Injectable, EventEmitter} from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
 providedIn:'root'
})
export class ShoppingListService {
  ingredientsChanged =  new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];


  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(id:number){
    return this.ingredients[id];
  }

  
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(id:number, newIngredient:Ingredient){
    this.ingredients[id] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index:number){
    this.ingredients.slice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
