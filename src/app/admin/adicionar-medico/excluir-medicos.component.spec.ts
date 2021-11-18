import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirMedicosComponent } from './excluir-medicos.component';

describe('ExcluirMedicosComponent', () => {
  let component: ExcluirMedicosComponent;
  let fixture: ComponentFixture<ExcluirMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirMedicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
