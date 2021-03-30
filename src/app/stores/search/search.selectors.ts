import { createSelector } from '@ngrx/store';
import { AppState } from '../../models/app-state.model';
import { SearchState } from './search.reducer';

export const appState = (state: AppState) => state.searchState;

export const selectSearchResults = createSelector(
  appState,
  (state: SearchState) => state.meals
);

export const selectSearchResultsLoading = createSelector(
  appState,
  (state: SearchState) => state.loading
);
