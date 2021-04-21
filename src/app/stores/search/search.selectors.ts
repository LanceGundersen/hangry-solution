import { createSelector } from '@ngrx/store';
import { AppState } from '../../models/app-state.model';
import { SearchState } from './search.reducer';

export const searchState = (state: AppState) => state.searchState;

export const selectSearchResults = createSelector(
  searchState,
  (state: SearchState) => state.search.meals
);

export const selectSearchResultsLoading = createSelector(
  searchState,
  (state: SearchState) => state.search.loading
);

export const selectSearchResultsLoaded = createSelector(
  searchState,
  (state: SearchState) => state.search.loaded
);

export const selectSearchByIdResults = createSelector(
  searchState,
  (state: SearchState) => state.selectedMeal.result
);

export const selectSearchByIdResultsLoading = createSelector(
  searchState,
  (state: SearchState) => state.selectedMeal.loading
);
