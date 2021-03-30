import { SearchRecipesById } from './../stores/search/search.actions';
import { SearchState } from './../stores/search/search.reducer';
import { Store } from '@ngrx/store';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.sass']
})
export class RecipeCardComponent {

  @Input() name: string;
  @Input() image: string;
  @Input() id;

  constructor(private store: Store<SearchState>) { }

  selectRecipe(id: string): void {
    this.store.dispatch(new SearchRecipesById(id));
  }

}
