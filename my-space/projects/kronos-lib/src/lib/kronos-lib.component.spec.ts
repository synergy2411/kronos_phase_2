import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KronosLibComponent } from './kronos-lib.component';

describe('KronosLibComponent', () => {
  let component: KronosLibComponent;
  let fixture: ComponentFixture<KronosLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KronosLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KronosLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
