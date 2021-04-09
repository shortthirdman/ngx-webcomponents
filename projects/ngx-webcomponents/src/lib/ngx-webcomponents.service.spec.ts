import { TestBed } from '@angular/core/testing';

import { NgxWebcomponentsService } from './ngx-webcomponents.service';

describe('NgxWebcomponentsService', () => {
  let service: NgxWebcomponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxWebcomponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
