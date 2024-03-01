/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContentHeaderInterceptorService } from './content-header-interceptor.service';

describe('Service: ContentHeaderInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentHeaderInterceptorService]
    });
  });

  it('should ...', inject([ContentHeaderInterceptorService], (service: ContentHeaderInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
