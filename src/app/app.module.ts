import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

//Angular Material
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker'; 

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { MedicosComponent } from './medicos/medicos.component';
import { RemediosComponent } from './remedios/remedios.component'
import { CalendarioComponent } from './calendario/calendario.component';
import { AdicionarComponent } from './admin/adicionar/adicionar.component';
import { EditarComponent } from './admin/editar/editar.component';
import { ExcluirComponent } from './admin/excluir/excluir.component';
import { AdicionarMedicosComponent } from './admin/adicionar-medico/adicionar-medico.component';
import { EditaMedicosComponent } from './admin/adicionar-medico/edita-medicos.component';
import { ExcluirMedicosComponent } from './admin/adicionar-medico/excluir-medicos.component';
import { AdicionarConsultaComponent } from './admin/consultas-acoes/adicionar-consulta/adicionar-consulta.component';
import { EditarConsultaComponent } from './admin/consultas-acoes/editar-consulta/editar-consulta.component';
import { ExcluirConsultaComponent } from './admin/consultas-acoes/excluir-consulta/excluir-consulta.component';
import { FormatoRealPipe } from './formato-real.pipe';
import { CadastroComponent } from './cadastro/cadastro.component';







@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ConsultasComponent,
    MedicosComponent,
    RemediosComponent,
    CalendarioComponent,
    AdicionarComponent,
    EditarComponent,
    ExcluirComponent,
    AdicionarMedicosComponent,
    EditaMedicosComponent,
    ExcluirMedicosComponent,
    AdicionarConsultaComponent,
    EditarConsultaComponent,
    ExcluirConsultaComponent,
    FormatoRealPipe,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
