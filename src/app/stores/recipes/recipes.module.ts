import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { NgxPaginationModule } from 'ngx-pagination';

import { RecipePuppyService } from '../../services/recipe-puppy.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    StoreModule.forRoot({})
  ],
  providers: [RecipePuppyService]
})

export class RecipesStoreModule { }
