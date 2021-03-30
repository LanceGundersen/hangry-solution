import { Recipe } from 'src/app/models/recipe.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeList } from '../models/recipe-list.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) { }

  searchRecipes(term: string): Observable<RecipeList[]> {
    return this.http.get<RecipeList[]>(`${this.baseUrl}/filter.php?i=${term.trim()}`);
  }

  searchRecipeById(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.baseUrl}/lookup.php?i=${id.trim()}`);
  }
}
