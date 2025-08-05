import { TestBed } from '@angular/core/testing';
import { DemoServiceImplB } from './demo-service-impl-B.service';
import { DemoState } from '../../state/global/demo-global.state';

describe('DemoServiceImplB', () => {
  let service: DemoServiceImplB;
  let state: DemoState;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoServiceImplB);
    state = TestBed.inject(DemoState);
  });

  it('should update progress on executeWork', () => {
    service.selectUser('Hanako');
    service.selectWork('作業B');
    service.executeWork(2);
    expect(state.progress()).toBe(2);
  });
});
