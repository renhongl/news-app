import { TestBed } from '@angular/core/testing';

import { SubMenuService } from './sub-menu.service';

describe('SubMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubMenuService = TestBed.get(SubMenuService);
    expect(service).toBeTruthy();
  });
});
