import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { UsuarioService } from '../usuario/usuario.service';
import Swal from 'sweetalert2';
import { Hospital } from 'src/app/models/hospital.model';


@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  totalHospitales: number = 0;
  token: string;

  constructor( public http: HttpClient,
               public _usuarioService: UsuarioService ) { }

  cargarHospitales(){

    let url = URL_SERVICIOS + '/hospital';
    return this.http.get( url )
        .map( (resp: any) => {
          this.totalHospitales = resp.total;
          return resp.hospitales;
        });
  }

  obtenerHospital( id: string ){
    let url = URL_SERVICIOS + '/hospital/' + id;
    return this.http.get( url )
        .map( (resp: any ) => resp.hospital );
  }

  borrarHospital( id: string ){

    let url = URL_SERVICIOS + '/hospital/' + id;
    url += '?token=' + this._usuarioService.token;
    return this.http.delete( url )
        .map( (resp: any) => {
          Swal.fire({
            text: 'Hospital Eliminado',
            icon: 'success'
          });
        });
  }

  crearHospital( nombre: string){
   let url = URL_SERVICIOS + '/hospital';
   url += '?token=' + this._usuarioService.token;
   return this.http.post( url, { nombre })
        .map( (resp: any) => {
          Swal.fire({
            text: 'Hospital Creado',
            icon: 'success'
          });
          return resp.hospital;
        });
  }

  buscarHospital( termino: string ) {

    let url = URL_SERVICIOS + '/busqueda/coleccion/hospitales/' + termino;
    return this.http.get( url )
        .map(( resp: any ) => resp.hospitales);
  }

  actualizarHospital( hospital: Hospital ){

    let url = URL_SERVICIOS + '/hospital/' + hospital._id;
    url += '?token=' + this._usuarioService.token;
    return this.http.put( url, hospital)
        .map( (resp: any) =>{
          Swal.fire({
            text: 'Hospital Actualizado' + '' +  hospital.nombre,
            icon: 'success'
          });
          return resp.hospital; 
        });
  }

}


