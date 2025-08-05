import { TestBed } from '@angular/core/testing';
import { DemoLocalStateC } from './demo-local-C.state';
import { DemoState } from '../global/demo-global.state';

describe('DemoLocalStateC', () => {
  let globalState: DemoState;
  let localState: DemoLocalStateC;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    globalState = TestBed.inject(DemoState);
    localState = TestBed.inject(DemoLocalStateC);
  });

  it('should compute isEnableComplete and toggle dialog', () => {
    expect(localState.isEnableComplete()).toBeFalse();
    globalState.updateProgress(10);
    expect(localState.isEnableComplete()).toBeTrue();
    expect(localState.isVisibleDialog()).toBeFalse();
    localState.setDialogVisible(true);
    expect(localState.isVisibleDialog()).toBeTrue();
  });
});
