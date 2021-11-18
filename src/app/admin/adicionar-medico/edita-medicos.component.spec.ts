import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaMedicosComponent } from './edita-medicos.component';

describe('EditaMedicosComponent', () => {
  let component: EditaMedicosComponent;
  let fixture: ComponentFixture<EditaMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaMedicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
