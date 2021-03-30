import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { RecipeService } from '../../services/recipe.service';

import {
  SearchRecipes,
  RecipesActionTypes,
  SearchRecipesSuccess,
  SearchRecipesFailed,
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
}
