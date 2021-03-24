import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { RecipeService } from '../../services/recipe.service';

import {
  GetRecipes,
  RecipesActionTypes,
  GetRecipesSuccess,
  GetRecipesFailed,
} from './recipes.actions';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class RecipeEffects {

  constructor(
    private actions$: Actions,
    private recipeService: RecipeService
  ) { }


  getRecipes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<GetRecipes>(RecipesActionTypes.GET_RECIPES),
      switchMap(({ term }) =>
        this.recipeService.searchRecipes(term).pipe(
          map((response) => {
            return new GetRecipesSuccess(response);
          }),
          catchError(error => of(new GetRecipesFailed(error)))
        )
      )
    );
  });
}
