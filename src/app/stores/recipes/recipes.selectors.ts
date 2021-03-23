import { createSelector } from '@ngrx/store';

export interface RecipeSearchState {
  results: [];
  page: number
}

export interface AppState {
  recipeSearchResults: RecipeSearchState;
}

export const recipeSearchResults = (state: AppState) => state.recipeSearchResults;

export const selectFeatureCount = createSelector(
  recipeSearchResults,
  (state: RecipeSearchState) => state.results
);
