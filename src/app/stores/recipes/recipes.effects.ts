import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { RecipePuppyService } from '../../services/recipe-puppy.service';

import {
  GetRecipes,
  RecipesActionTypes,
  GetRecipesSuccess,
  GetRecipesFailed,
} from './recipes.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class RecipeEffects {

  constructor(
    private actions$: Actions,
    private recipeService: RecipePuppyService
  ) { }


  getRecipes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<GetRecipes>(RecipesActionTypes.GET_RECIPES),
      mergeMap((action) =>
        this.recipeService.searchRecipes(action.term).pipe(
          map((response) => {
            return new GetRecipesSuccess(response);
          }),
          catchError(error => of(new GetRecipesFailed(error)))
        )
      )
    );
  });
}
