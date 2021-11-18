import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarMedicosComponent } from './adicionar-medico.component';

describe('AdicionarMedicoComponent', () => {
  let component: AdicionarMedicosComponent;
  let fixture: ComponentFixture<AdicionarMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarMedicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
