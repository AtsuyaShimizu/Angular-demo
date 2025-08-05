import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoPartsLog } from './demo-parts-log';

describe('DemoPartsLog', () => {
  let component: DemoPartsLog;
  let fixture: ComponentFixture<DemoPartsLog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoPartsLog]
    }).compileComponents();

    fixture = TestBed.createComponent(DemoPartsLog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit remove_log', () => {
    const spy = jasmine.createSpy('remove');
    component.remove_log.subscribe(spy);
    component.remove(0);
    expect(spy).toHaveBeenCalledWith(0);
  });
});
