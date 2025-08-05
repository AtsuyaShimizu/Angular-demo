import { TestBed } from '@angular/core/testing';
import { DemoServiceImplDefault } from './demo-service-impl-default.service';
import { DemoState } from '../../state/global/demo-global.state';

describe('DemoServiceImplDefault', () => {
  let service: DemoServiceImplDefault;
  let state: DemoState;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoServiceImplDefault);
    state = TestBed.inject(DemoState);
  });

  it('should set work kind on selectWork', () => {
    service.selectWork('作業B');
    expect(state.workKind()).toBe('作業B');
  });
});
