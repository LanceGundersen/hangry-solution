import { RecipeDetailsDialogComponent } from './../../recipe-details-dialog/recipe-details-dialog.component';
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
  OpenRecipeDetailsDialog,
  CloseRecipeDetailsDialog,
} from './search.actions';
import { catchError, flatMap, map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/models/app-state.model';
import { selectSearchByIdResults } from './search.selectors';
import { MatDialog } from '@angular/material/dialog';
@Injectable()
export class RecipeEffects {

  constructor(
    private actions$: Actions,
    private recipeService: RecipeService,
    private store: Store<AppState>,
    private dialog: MatDialog,
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


  openDialog$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<SearchRecipesByIdSuccess>(RecipesActionTypes.SEARCH_RECIPES_BY_ID_SUCCESS),
      withLatestFrom(this.store.pipe(select(selectSearchByIdResults))),
      mergeMap(([_, results]) => {
        const dialogRef = this.dialog.open(RecipeDetailsDialogComponent, {
          panelClass: 'details-dialog',
          data: { ...results }
        });
        return dialogRef.afterClosed();
      }),
      map((result: string) => {
        if (result === undefined) {
          return new CloseRecipeDetailsDialog();
        }
      })
      ,
    );
  },
    { dispatch: false });
}
