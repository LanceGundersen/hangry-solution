import { RecipesAction, RecipesActionTypes } from './search.actions';
import { RecipeList } from '../../models/recipe-list.model';

export interface SearchState {
  meals: RecipeList[];
  loading: boolean;
  error: string | any;
}

const initialState: SearchState = {
  meals: [],
  loading: false,
  error: ''
};

export function SearchRecipesReducer(state: SearchState = initialState, action: RecipesAction): SearchState {
  switch (action.type) {
    case RecipesActionTypes.SEARCH_RECIPES:
      return {
        ...state,
        loading: true
      };
    case RecipesActionTypes.SEARCH_RECIPES_SUCCESS:
      return {
        ...state,
        meals: action.meals,
        loading: false

      };
    case RecipesActionTypes.SEARCH_RECIPES_FAILED:
      return {
        ...state,
        meals: [],
        error: action.payload,
        loading: false

      };
    default:
      return state;
  }
}
