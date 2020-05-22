import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';


import Swal from 'sweetalert2';



declare function ini_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;
  

  // tslint:disable-next-line: variable-name
  constructor( public _usuarioService: UsuarioService,
               public _router: Router ) { }

  sonIguales( campo1: string, campo2: string){
    return ( group: FormGroup ) =>{

      const pass1 = group.controls[campo1].value;
      const pass2 = group.controls[campo2].value;

      if ( pass1 === pass2){
        return null;
      }

      return{
          sonIguales: true
        };
    };
  }

  ngOnInit(): void {

    ini_plugins();

    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password1: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false)
    }, { validators: this.sonIguales( 'password1', 'password2') });

    this.forma.setValue({
      nombre: 'Test1',
      correo: 'tests@gmail.com',
      password1: '123456',
      password2: '1234567',
      condiciones: true

    });
  }

  registrarUsuario() {

    if (this.forma.invalid){
      return;
    }

    if ( !this.forma.value.condiciones){
      Swal.fire({
        title: 'Importante',
        text: 'Debe aceptar las condiciones',
        icon: 'warning'
      });
      return;
    }

    const usuario = new Usuario(
        this.forma.value.nombre,
        this.forma.value.correo,
        this.forma.value.password1
    );

    this._usuarioService.crearUsuario( usuario )
          .subscribe( resp =>{
            this._router.navigate(['/login']);
          });

  }

}
