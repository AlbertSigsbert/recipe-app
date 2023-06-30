import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients: Ingredient[];
  private idChangedSubscription: Subscription;
  

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
     this.ingredients = this.slService.getIngredients();

     this.idChangedSubscription = this.slService.ingredientsChanged.subscribe((ingredients:Ingredient[]) => {
      this.ingredients = ingredients;
     });
  }

  onEditItem(id:number){
     this.slService.startedEditing.next(id);
  }

  ngOnDestroy(): void {
    this.idChangedSubscription.unsubscribe();
  }

 
}
