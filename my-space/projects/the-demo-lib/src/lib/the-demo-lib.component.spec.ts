import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheDemoLibComponent } from './the-demo-lib.component';

describe('TheDemoLibComponent', () => {
  let component: TheDemoLibComponent;
  let fixture: ComponentFixture<TheDemoLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheDemoLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheDemoLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
