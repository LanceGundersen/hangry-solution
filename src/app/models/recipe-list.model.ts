export interface RecipeList {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface RecipeSearchResponse {
  meals: RecipeList[];
}
