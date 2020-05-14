import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function ini_plugins();
  


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public _router: Router) { }

  ngOnInit(): void {

    ini_plugins();
  }

  ingresar(){
  this._router.navigate(['/dashboard']);
  }

}
