import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Rutas
import { APP_ROUTES } from './app.routes';

// modulos

import { PagesModule } from './pages/pages.module';


// temporal

import { FormsModule } from '@angular/forms';

// servicios

import { ServiceModule } from './services/service.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
   APP_ROUTES,
   FormsModule,
   ServiceModule 
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
