import { Action } from '@ngrx/store';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeList } from '../../models/recipe-list.model';

export enum RecipesActionTypes {
  SEARCH_RECIPES = '[API SEARCH] SEARCH_RECIPES',
  SEARCH_RECIPES_SUCCESS = '[API SEARCH] SEARCH_RECIPES_SUCCESS',
  SEARCH_RECIPES_FAILED = '[API SEARCH] SEARCH_RECIPES_FAILED',
  SEARCH_RECIPES_BY_ID = '[API SEARCH] SEARCH_RECIPES_BY_ID',
  SEARCH_RECIPES_BY_ID_SUCCESS = '[API SEARCH] SEARCH_RECIPES_BY_ID_SUCCESS',
  SEARCH_RECIPES_BY_ID_FAILED = '[API SEARCH] SEARCH_RECIPES_BY_ID_FAILED'
}

export class SearchRecipes implements Action {
  readonly type = RecipesActionTypes.SEARCH_RECIPES;
  constructor(public term: string) { }
}

export class SearchRecipesSuccess implements Action {
  readonly type = RecipesActionTypes.SEARCH_RECIPES_SUCCESS;
  constructor(public meals: RecipeList[]) { }
}

export class SearchRecipesFailed implements Action {
  readonly type = RecipesActionTypes.SEARCH_RECIPES_FAILED;
  constructor(public payload: string) { }
}

export class SearchRecipesById implements Action {
  readonly type = RecipesActionTypes.SEARCH_RECIPES_BY_ID;
  constructor(public id: string) { }
}

export class SearchRecipesByIdSuccess implements Action {
  readonly type = RecipesActionTypes.SEARCH_RECIPES_BY_ID_SUCCESS;
  constructor(public payload: Recipe) { }
}

export class SearchRecipesByIdFailed implements Action {
  readonly type = RecipesActionTypes.SEARCH_RECIPES_BY_ID_FAILED;
  constructor(public payload: string) { }
}

export type RecipesAction =
  SearchRecipes |
  SearchRecipesSuccess |
  SearchRecipesFailed |
  SearchRecipesById |
  SearchRecipesByIdSuccess |
  SearchRecipesByIdFailed;
