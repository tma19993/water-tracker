import { TestBed } from '@angular/core/testing';

import { WaterIntake } from './water-intake';

describe('WaterIntake', () => {
  let service: WaterIntake;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterIntake);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
