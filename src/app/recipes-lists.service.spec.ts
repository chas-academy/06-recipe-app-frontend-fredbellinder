import { TestBed } from '@angular/core/testing';

import { RecipesListsService } from './recipes-lists.service';

describe('RecipesListsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipesListsService = TestBed.get(RecipesListsService);
    expect(service).toBeTruthy();
  });
});
