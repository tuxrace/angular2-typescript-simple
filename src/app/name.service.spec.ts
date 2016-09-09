/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { NameService } from './name.service';

describe('Service: Name', () => {
  beforeEach(() => {
    addProviders([NameService]);
  });

  it('should ...',
    inject([NameService],
      (service: NameService) => {
        expect(service).toBeTruthy();
      }));
});
