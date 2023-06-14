import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalPinComponent } from './personal-pin.component';

describe('PersonalPinComponent', () => {
  let component: PersonalPinComponent;
  let fixture: ComponentFixture<PersonalPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalPinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
