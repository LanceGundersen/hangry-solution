import Recipe from '../../models/recipe.model';
import { RecipesAction, RecipesActionTypes } from './recipes.actions';

export interface RecipesState {
  searchResults: Recipe[];
  loading: boolean;
  error: string | any;
}

const initialState: RecipesState = {
  searchResults: [],
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
        searchResults: action.payload.meals,
        loading: false
      };
    case RecipesActionTypes.GET_RECIPES_FAILED:
      return {
        ...state,
        searchResults: [],
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
