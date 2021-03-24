import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import AppState from '../models/app-state.model';
import { GetRecipes } from '../stores/recipes/recipes.actions';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.sass']
})
export class RecipeSearchComponent {

  constructor(private store: Store<AppState>) { }

  search(searchTerm: string) {
    if (searchTerm.length) {
      this.store.dispatch(new GetRecipes(searchTerm));
    }
  }

}
