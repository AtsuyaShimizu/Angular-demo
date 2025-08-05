import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoPartsCenter } from './demo-parts-center';

describe('DemoPartsCenter', () => {
  let component: DemoPartsCenter;
  let fixture: ComponentFixture<DemoPartsCenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoPartsCenter]
    }).compileComponents();

    fixture = TestBed.createComponent(DemoPartsCenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
