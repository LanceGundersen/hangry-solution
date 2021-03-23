import { Component } from '@angular/core';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-recipe-site';

  recipes = new Array();
}
