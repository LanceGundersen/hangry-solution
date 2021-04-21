import { AppState } from './models/app-state.model';
import { RecipeList } from './models/recipe-list.model';
import { selectSearchResults, selectSearchResultsLoaded, selectSearchResultsLoading } from './stores/search/search.selectors';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  searchResults$: Observable<RecipeList[]> = this.store.pipe(select(selectSearchResults));
  isLoading$: Observable<boolean> = this.store.pipe(select(selectSearchResultsLoading));
  isLoaded$: Observable<boolean> = this.store.pipe(select(selectSearchResultsLoaded));

  constructor(private readonly store: Store<AppState>) { }
}
