import { TestBed } from '@angular/core/testing';
import { DemoLocalStateA } from './demo-local-A.state';
import { DemoState } from '../global/demo-global.state';

describe('DemoLocalStateA', () => {
  let globalState: DemoState;
  let localState: DemoLocalStateA;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    globalState = TestBed.inject(DemoState);
    localState = TestBed.inject(DemoLocalStateA);
  });

  it('should compute isEnableComplete based on progress', () => {
    expect(localState.isEnableComplete()).toBeFalse();
    globalState.updateProgress(10);
    expect(localState.isEnableComplete()).toBeTrue();
  });
});
