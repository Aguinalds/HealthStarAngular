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
      { path: 'editar/:id', component: EditarComponent }
    ]
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
