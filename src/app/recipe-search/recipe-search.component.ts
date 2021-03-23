import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import AppState from '../models/app-state.model';
import { GetRecipes } from '../stores/recipes/recipes.actions';


@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.sass']
})
export class RecipeSearchComponent implements OnInit {



  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  search(term: string) {
    this.store.dispatch(new GetRecipes(term));
  }

}
