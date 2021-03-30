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

  constructor() { }

  selectRecipe(id: string): void {
    console.log({ id });
  }

}
