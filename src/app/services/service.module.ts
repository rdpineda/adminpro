import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';





import { SettingsService, SharedService,
  SidebarService, UsuarioService,
  LoginGuardsGuard, SubirArhivoService, HospitalService,  MedicoService } from './service.index';




@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],

  providers: [
    SettingsService,
    SharedService,
    SidebarService,
    UsuarioService,
    HospitalService,
    MedicoService,
    LoginGuardsGuard,
    SubirArhivoService,
    ModalUploadService
  ],
  declarations: [],
 
})
export class ServiceModule { }
