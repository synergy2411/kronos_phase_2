import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTrackDemoComponent } from './ng-track-demo.component';

describe('NgTrackDemoComponent', () => {
  let component: NgTrackDemoComponent;
  let fixture: ComponentFixture<NgTrackDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgTrackDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTrackDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
