import { TestBed, async, inject } from '@angular/core/testing';

import { ForbidGuard } from './forbid.guard';

describe('ForbidGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForbidGuard]
    });
  });

  it('should ...', inject([ForbidGuard], (guard: ForbidGuard) => {
    expect(guard).toBeTruthy();
  }));
});
