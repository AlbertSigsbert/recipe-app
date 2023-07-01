import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
   subscription :Subscription;
   editMode:boolean = false;
   editedItemId: number;
   editedItem:Ingredient;
   @ViewChild('f',{static:false}) slForm: NgForm;
  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe((id:number) => {
        this.editMode = true;
        this.editedItemId = id;
        this.editedItem = this.slService.getIngredient(id);
        this.slForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        })
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemId, newIngredient);
    }else{
      this.slService.addIngredient(newIngredient);
    }

   
    this.editMode = false;
    form.reset();
  }

  onClear(){
     this.editMode = false;
     this.slForm.reset(); 
  }

  onDelete(){
    this.slService.deleteIngredient(this.editedItemId);
     this.onClear();

  }

}
