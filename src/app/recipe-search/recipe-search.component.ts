import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchState } from '../stores/search/search.reducer';
import { SearchRecipes } from '../stores/search/search.actions';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.sass']
})
export class RecipeSearchComponent {

  constructor(private store: Store<SearchState>) { }

  search(term: string): void {
    if (term.length) {
      this.store.dispatch(new SearchRecipes(term));
    }
  }

}
