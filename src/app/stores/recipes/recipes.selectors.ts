import { RecipesState } from './recipes.reducer';
import { createSelector } from '@ngrx/store';
import AppState from '../../models/app-state.model';

export const searchResults = (state: AppState) => state.searchResults;

export const selectSearchResults = createSelector(
  searchResults,
  // TODO: add type
  (state: RecipesState) => state.searchResults
);

export const selectSearchResultsLoading = createSelector(
  searchResults,
  // TODO: add type
  (state: RecipesState) => state.loading
);
