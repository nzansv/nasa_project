import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthDataComponent } from './earth-data.component';

describe('EarthDataComponent', () => {
  let component: EarthDataComponent;
  let fixture: ComponentFixture<EarthDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarthDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
