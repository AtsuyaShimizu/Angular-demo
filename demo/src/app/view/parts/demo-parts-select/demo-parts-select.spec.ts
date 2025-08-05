import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoPartsSelect } from './demo-parts-select';

describe('DemoPartsSelect', () => {
  let component: DemoPartsSelect;
  let fixture: ComponentFixture<DemoPartsSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoPartsSelect]
    }).compileComponents();

    fixture = TestBed.createComponent(DemoPartsSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit select events', () => {
    const userSpy = jasmine.createSpy('user');
    const workSpy = jasmine.createSpy('work');
    component.select_user.subscribe(userSpy);
    component.select_work.subscribe(workSpy);
    component.onSelectUser({ target: { value: 'A' } } as unknown as Event);
    component.onSelectWork({ target: { value: 'W' } } as unknown as Event);
    expect(userSpy).toHaveBeenCalledWith('A');
    expect(workSpy).toHaveBeenCalledWith('W');
  });
});
