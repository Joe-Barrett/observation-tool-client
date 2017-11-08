import {inject, TestBed} from '@angular/core/testing';
import {LongitudeConversionService} from './longitude-conversion.service';

describe('LongitudeConversionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LongitudeConversionService]
    });
  });

  it('should be created', inject([LongitudeConversionService], (service: LongitudeConversionService) => {
    expect(service).toBeTruthy();
  }));
});