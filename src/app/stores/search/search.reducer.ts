import { Recipe } from 'src/app/models/recipe.model';
import { RecipesAction, RecipesActionTypes } from './search.actions';
import { RecipeList } from '../../models/recipe-list.model';

export interface SearchState {
  search: {
    meals: RecipeList[];
    loading: boolean;
    loaded: boolean;
    error: string | any;
  };
  selectedMeal: {
    result: Recipe;
    loading: boolean;
    error: string | any;
  };
}

const initialState: SearchState = {
  search: {
    meals: [],
    loading: false,
    loaded: false,
    error: '',
  },
  selectedMeal: {
    result: null,
    loading: false,
    error: '',
  },
};

export function SearchRecipesReducer(state: SearchState = initialState, action: RecipesAction): SearchState {
  switch (action.type) {
    case RecipesActionTypes.SEARCH_RECIPES:
      return {
        ...state,
        search: {
          meals: [],
          loading: true,
          loaded: false,
          error: '',
        }
      };
    case RecipesActionTypes.SEARCH_RECIPES_SUCCESS:
      return {
        ...state,
        search: {
          meals: action.meals,
          loading: false,
          loaded: true,
          error: '',
        }
      };
    case RecipesActionTypes.SEARCH_RECIPES_FAILED:
      return {
        ...state,
        search: {
          meals: [],
          loading: false,
          loaded: false,
          error: action.payload,
        }
      };
    case RecipesActionTypes.SEARCH_RECIPES_BY_ID:
      return {
        ...state,
        selectedMeal: {
          result: null,
          loading: true,
          error: ''
        }
      };
    case RecipesActionTypes.SEARCH_RECIPES_BY_ID_SUCCESS:
      return {
        ...state,
        selectedMeal: {
          result: action.payload[0],
          loading: false,
          error: ''
        }
      };
    case RecipesActionTypes.SEARCH_RECIPES_BY_ID_FAILED:
      return {
        ...state,
        selectedMeal: {
          result: null,
          loading: false,
          error: action.payload
        }
      };
    default:
      return state;
  }
}
