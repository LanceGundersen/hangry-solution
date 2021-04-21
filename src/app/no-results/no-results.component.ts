import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { RecipeList } from '../models/recipe-list.model';

@Component({
  selector: 'app-no-results',
  templateUrl: './no-results.component.html',
  styleUrls: ['./no-results.component.sass']
})
export class NoResultsComponent {
  @Input() searchResults$: Observable<RecipeList[]>;
}
