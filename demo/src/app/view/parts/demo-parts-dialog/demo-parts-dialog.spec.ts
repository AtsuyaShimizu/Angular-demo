import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoPartsDialog } from './demo-parts-dialog';

describe('DemoPartsDialog', () => {
  let component: DemoPartsDialog;
  let fixture: ComponentFixture<DemoPartsDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoPartsDialog]
    }).compileComponents();

    fixture = TestBed.createComponent(DemoPartsDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change workCount via methods', () => {
    component.onClickPlusBtn();
    expect(component.workCount).toBe(2);
    component.onClickMinusBtn();
    expect(component.workCount).toBe(1);
  });
});
