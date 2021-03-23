import Recipe from '../../models/recipe.model';
import { RecipesAction, RecipesActionTypes } from './recipes.actions';

export interface RecipesState {
  recipes: Recipe[];
  loading: boolean;
  error: string | any;
}

const initialState: RecipesState = {
  recipes: [],
  loading: false,
  error: ''
};

export function RecipesReducer(state: RecipesState = initialState, action: RecipesAction) {
  switch (action.type) {
    case RecipesActionTypes.GET_RECIPES:
      return {
        ...state,
        loading: true
      };
    case RecipesActionTypes.GET_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: action.payload,
        loading: false
      };
    case RecipesActionTypes.GET_RECIPES_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
