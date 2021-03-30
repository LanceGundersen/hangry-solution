import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { RecipeService } from '../../services/recipe.service';

import {
  GetRecipes,
  RecipesActionTypes,
  GetRecipesSuccess,
  GetRecipesFailed,
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
      ofType<GetRecipes>(RecipesActionTypes.GET_RECIPES),
      switchMap(({ term }) => {
        return this.recipeService.searchRecipes(term).pipe(
          map((response: any) => new GetRecipesSuccess(response.meals)),
          catchError(error => of(new GetRecipesFailed(error)))
        );
      })
    );
  });
}
