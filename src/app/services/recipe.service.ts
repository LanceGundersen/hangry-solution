import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Recipe from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) { }

  searchRecipes(term: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.baseUrl}/filter.php?i=${term.trim()}`);
  }
}
