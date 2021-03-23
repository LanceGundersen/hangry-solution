import { Action } from '@ngrx/store';
import Recipe from 'src/app/models/recipe.model';


export enum RecipesActionTypes {
  GET_RECIPES = 'GET_RECIPES',
  GET_RECIPES_SUCCESS = 'GET_RECIPES_SUCCESS',
  GET_RECIPES_FAILED = 'GET_RECIPES_FAILED'
}

export class GetRecipes implements Action {
  readonly type = RecipesActionTypes.GET_RECIPES;
  constructor(public term: string) { }
}

export class GetRecipesSuccess implements Action {
  readonly type = RecipesActionTypes.GET_RECIPES_SUCCESS;
  constructor(public payload: any) { }
}

export class GetRecipesFailed implements Action {
  readonly type = RecipesActionTypes.GET_RECIPES_FAILED;
  constructor(public payload: string) { }
}

export type RecipesAction =
  GetRecipes |
  GetRecipesSuccess |
  GetRecipesFailed;
