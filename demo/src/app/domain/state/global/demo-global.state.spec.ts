import { TestBed } from '@angular/core/testing';
import { DemoState } from './demo-global.state';

describe('DemoState', () => {
  let state: DemoState;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    state = TestBed.inject(DemoState);
  });

  it('should update and reset progress', () => {
    state.updateProgress(5);
    expect(state.progress()).toBe(5);
    state.completeWork();
    expect(state.progress()).toBe(0);
  });

  it('should add and delete log', () => {
    state.addLog('作業A', '実行', 'tester', 1);
    expect(state.logs().length).toBe(1);
    state.deleteLog(0);
    expect(state.logs().length).toBe(0);
  });
});
