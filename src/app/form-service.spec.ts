import { TestBed } from '@angular/core/testing';

import { PostpikachuService } from './post-pikachu.service';

describe('PostpikachuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostpikachuService = TestBed.get(PostpikachuService);
    expect(service).toBeTruthy();
  });
});
