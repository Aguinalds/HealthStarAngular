import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirConsultaComponent } from './excluir-consulta.component';

describe('ExcluirConsultaComponent', () => {
  let component: ExcluirConsultaComponent;
  let fixture: ComponentFixture<ExcluirConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
