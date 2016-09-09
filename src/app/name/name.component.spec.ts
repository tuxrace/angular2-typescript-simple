/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { NameComponent } from './name.component';

describe('Component: Name', () => {
  it('should create an instance', () => {
    let component = new NameComponent();
    expect(component).toBeTruthy();
  });
});
