import { TestBed } from '@angular/core/testing';
import { DemoServiceImplA } from './demo-service-impl-A.service';
import { DemoState } from '../../state/global/demo-global.state';

describe('DemoServiceImplA', () => {
  let service: DemoServiceImplA;
  let state: DemoState;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoServiceImplA);
    state = TestBed.inject(DemoState);
  });

  it('should update progress on executeWork', () => {
    service.selectUser('Taro');
    service.selectWork('作業A');
    service.executeWork(3);
    expect(state.progress()).toBe(3);
  });
});
