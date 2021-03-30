import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { RecipeService } from '../../services/recipe.service';

import {
  SearchRecipes,
  RecipesActionTypes,
  SearchRecipesSuccess,
  SearchRecipesFailed,
  SearchRecipesById,
  SearchRecipesByIdFailed,
  SearchRecipesByIdSuccess,
} from './search.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable()
export class RecipeEffects {

  constructor(
    private actions$: Actions,
    private recipeService: RecipeService
  ) { }


  getRecipes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<SearchRecipes>(RecipesActionTypes.SEARCH_RECIPES),
      switchMap(({ term }) => {
        return this.recipeService.searchRecipes(term).pipe(
          map((response: any) => new SearchRecipesSuccess(response.meals)),
          catchError(error => of(new SearchRecipesFailed(error)))
        );
      })
    );
  });

  getRecipeById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<SearchRecipesById>(RecipesActionTypes.SEARCH_RECIPES_BY_ID),
      switchMap(({ id }) => {
        return this.recipeService.searchRecipeById(id).pipe(
          map((response: any) => new SearchRecipesByIdSuccess(response.meals)),
          catchError(error => of(new SearchRecipesByIdFailed(error)))
        );
      })
    );
  });
}
