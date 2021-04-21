import { RecipeEffects } from './stores/search/search.effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { SearchRecipesReducer } from './stores/search/search.reducer';

import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { FooterComponent } from './footer/footer.component';
import { NoResultsComponent } from './no-results/no-results.component';
import { RecipeDetailsDialogComponent } from './recipe-details-dialog/recipe-details-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeCardComponent,
    RecipeSearchComponent,
    FooterComponent,
    NoResultsComponent,
    RecipeDetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot({
      searchState: SearchRecipesReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([
      RecipeEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RecipeDetailsDialogComponent]
})
export class AppModule { }
