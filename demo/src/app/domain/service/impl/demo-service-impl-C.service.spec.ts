import { TestBed } from '@angular/core/testing';
import { DemoServiceImplC } from './demo-service-impl-C.service';
import { DemoState } from '../../state/global/demo-global.state';
import { DemoLocalStateC } from '../../state/local/demo-local-C.state';

describe('DemoServiceImplC', () => {
  let service: DemoServiceImplC;
  let state: DemoState;
  let local: DemoLocalStateC;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoServiceImplC);
    state = TestBed.inject(DemoState);
    local = TestBed.inject(DemoLocalStateC);
  });

  it('should toggle dialog and update progress', () => {
    service.selectUser('Ichiro');
    service.selectWork('作業C');
    service.executeWork(2);
    expect(local.isVisibleDialog()).toBeTrue();
    service.executeWork(2);
    expect(state.progress()).toBe(2);
    expect(local.isVisibleDialog()).toBeFalse();
  });
});
