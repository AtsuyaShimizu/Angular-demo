import { TestBed } from '@angular/core/testing';
import { DemoLocalStateB } from './demo-local-B.state';
import { DemoState } from '../global/demo-global.state';

describe('DemoLocalStateB', () => {
  let globalState: DemoState;
  let localState: DemoLocalStateB;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    globalState = TestBed.inject(DemoState);
    localState = TestBed.inject(DemoLocalStateB);
  });

  it('should compute isEnableComplete based on progress', () => {
    expect(localState.isEnableComplete()).toBeFalse();
    globalState.updateProgress(7);
    expect(localState.isEnableComplete()).toBeTrue();
  });
});
