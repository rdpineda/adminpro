import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { Usuario } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor( public http: HttpClient,
               public _router: Router) { 
    this.cargarStorage();
  }

  guardarStorage(id: string, token: string, usuario: Usuario){
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;

  }

  estaLogueado(){
    return (this.token.length > 5 )? true : false;
  }

  cargarStorage(){
    if ( localStorage.getItem('token')){
          this.token = localStorage.getItem('token');
          this.usuario =  JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }


  login( usuario: Usuario, recordar: boolean = false){

    if ( recordar ){
      localStorage.setItem('email', usuario.email);
    }else{
      localStorage.removeItem('email');
    }
  
    let url = URL_SERVICIOS + '/login';
    return this.http.post( url, usuario )
              .map( (resp: any) =>{

                this.guardarStorage( resp.id, resp.token, resp.usuario);


                return true;
              });


  }

  logout(){

    this.token = '';
    this.usuario = null;

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this._router.navigate(['/login']);

  }


crearUsuario( usuario: Usuario){
  const url = URL_SERVICIOS + '/usuario';
  return this.http.post( url, usuario)
      .map( (resp: any) =>{

        Swal.fire({
          text: 'Usuario Creado',
          icon: 'success'
        });

        return resp.usuario;

      });
}



}
