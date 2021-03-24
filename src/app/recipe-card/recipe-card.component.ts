import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.sass']
})
export class RecipeCardComponent implements OnInit {

  @Input() name: string;
  @Input() image: string;
  @Input() summary: string;

  constructor() { }

  ngOnInit(): void {
  }

}
