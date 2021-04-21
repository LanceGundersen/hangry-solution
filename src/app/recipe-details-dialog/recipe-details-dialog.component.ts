import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-details-dialog',
  templateUrl: './recipe-details-dialog.component.html',
  styleUrls: ['./recipe-details-dialog.component.sass']
})
export class RecipeDetailsDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<RecipeDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Recipe
  ) { }

  close(): void {
    this.dialogRef.close();
  }

  goToLink(url: string): void {
    window.open(url, '_blank');
  }
}
