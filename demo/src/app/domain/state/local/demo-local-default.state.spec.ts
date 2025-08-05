import { TestBed } from '@angular/core/testing';
import { DemoLocalStateDefault } from './demo-local-default.state';

describe('DemoLocalStateDefault', () => {
  let localState: DemoLocalStateDefault;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    localState = TestBed.inject(DemoLocalStateDefault);
  });

  it('should enable select user initially', () => {
    expect(localState.isEnableSelectUser()).toBeTrue();
  });
});
