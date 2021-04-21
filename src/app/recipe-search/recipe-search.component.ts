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
  searchTerm = '';

  constructor(private store: Store<SearchState>) { }

  updateSearchTerm(value: string): void {
    if (value) { this.searchTerm = value.trim(); }
  }

  search(): void {
    if (this.searchTerm.length) { this.store.dispatch(new SearchRecipes(this.searchTerm)); }
  }
}
