import { Action } from '@ngrx/store';
import Recipe from 'src/app/models/recipe.model';
import { RecipeList } from '../../models/recipe-list.model';

export enum RecipesActionTypes {
  GET_RECIPES = '[LANDING PAGE] GET_RECIPES',
  GET_RECIPES_SUCCESS = '[LANDING PAGE] GET_RECIPES_SUCCESS',
  GET_RECIPES_FAILED = '[LANDING PAGE] GET_RECIPES_FAILED',
  GET_RECIPES_BY_ID = '[LANDING PAGE] GET_RECIPES_BY_ID',
  GET_RECIPES_BY_ID_SUCCESS = '[LANDING PAGE] GET_RECIPES_BY_ID_SUCCESS',
  GET_RECIPES_BY_ID_FAILED = '[LANDING PAGE] GET_RECIPES_BY_ID_FAILED'
}

export class GetRecipes implements Action {
  readonly type = RecipesActionTypes.GET_RECIPES;
  constructor(public term: string) { }
}

export class GetRecipesSuccess implements Action {
  readonly type = RecipesActionTypes.GET_RECIPES_SUCCESS;
  constructor(public meals: RecipeList[]) { }
}

export class GetRecipesFailed implements Action {
  readonly type = RecipesActionTypes.GET_RECIPES_FAILED;
  constructor(public payload: string) { }
}

export class GetRecipesById implements Action {
  readonly type = RecipesActionTypes.GET_RECIPES_BY_ID;
  constructor(public term: string) { }
}

export class GetRecipesByIdSuccess implements Action {
  readonly type = RecipesActionTypes.GET_RECIPES_BY_ID_SUCCESS;
  constructor(public payload: Recipe) { }
}

export class GetRecipesByIdFailed implements Action {
  readonly type = RecipesActionTypes.GET_RECIPES_BY_ID_FAILED;
  constructor(public payload: string) { }
}

export type RecipesAction =
  GetRecipes |
  GetRecipesSuccess |
  GetRecipesFailed |
  GetRecipesById |
  GetRecipesByIdSuccess |
  GetRecipesByIdFailed;
