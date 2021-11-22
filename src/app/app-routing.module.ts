import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { MedicosComponent } from './medicos/medicos.component';
import { RemediosComponent } from './remedios/remedios.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { AdicionarComponent } from './admin/adicionar/adicionar.component';
import { ExcluirComponent } from './admin/excluir/excluir.component';
import { EditarComponent } from './admin/editar/editar.component';
import { AdicionarMedicosComponent } from './admin/adicionar-medico/adicionar-medico.component';
import { EditaMedicosComponent } from './admin/adicionar-medico/edita-medicos.component';
import { ExcluirMedicosComponent } from './admin/adicionar-medico/excluir-medicos.component';
import { AdicionarConsultaComponent } from './admin/consultas-acoes/adicionar-consulta/adicionar-consulta.component';
import { EditarConsultaComponent } from './admin/consultas-acoes/editar-consulta/editar-consulta.component';
import { ExcluirConsultaComponent } from './admin/consultas-acoes/excluir-consulta/excluir-consulta.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'consultas', component: ConsultasComponent },
  { path: 'medicos', component: MedicosComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'configuracoes', component: ConfiguracoesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'remedios', component: RemediosComponent },
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: 'adicionar', component: AdicionarComponent },
      { path: 'excluir/:id', component: ExcluirComponent },
      { path: 'editar/:id', component: EditarComponent },
      { path: 'adicionarMedico', component: AdicionarMedicosComponent},
      { path: 'editarMedico/:id', component: EditaMedicosComponent},
      { path: 'excluirMedico/:id', component: ExcluirMedicosComponent},
      { path: 'adicionarConsulta', component: AdicionarConsultaComponent},
      { path: 'editarConsultaComponent/:id', component: EditarConsultaComponent},
      { path: 'excluirConsultaComponent/:id', component: ExcluirConsultaComponent}
  
    ]
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
