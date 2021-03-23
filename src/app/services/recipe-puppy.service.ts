import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Recipe from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipePuppyService {

  baseUrl = 'http://www.recipepuppy.com/api/';

  constructor(private http: HttpClient) { }

  searchRecipes(term: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.baseUrl}?${term.trim()}`);
  }
}
