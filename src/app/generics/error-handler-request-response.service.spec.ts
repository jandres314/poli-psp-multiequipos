import { TestBed } from '@angular/core/testing';

import { ErrorHandlerRequestResponseService } from './error-handler-request-response.service';

describe('ErrorHandlerRequestResponseService', () => {
  let service: ErrorHandlerRequestResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorHandlerRequestResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
