import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreciepeComponent } from './addreciepe.component';

describe('AddreciepeComponent', () => {
  let component: AddreciepeComponent;
  let fixture: ComponentFixture<AddreciepeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddreciepeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddreciepeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
