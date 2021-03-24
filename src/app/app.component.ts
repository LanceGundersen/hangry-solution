import { selectSearchResults, selectSearchResultsLoading } from './stores/recipes/recipes.selectors';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import AppState from './models/app-state.model';
import { Observable } from 'rxjs';
import Recipe from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(private store: Store<AppState>) { };

  recipes$: Observable<Recipe[]> = this.store.select(selectSearchResults);
  isLoading$: Observable<boolean> = this.store.select(selectSearchResultsLoading);
}
