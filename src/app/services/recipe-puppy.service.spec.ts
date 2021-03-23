/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecipePuppyService } from './recipe-puppy.service';

describe('Service: RecipePuppy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipePuppyService]
    });
  });

  it('should ...', inject([RecipePuppyService], (service: RecipePuppyService) => {
    expect(service).toBeTruthy();
  }));
});
