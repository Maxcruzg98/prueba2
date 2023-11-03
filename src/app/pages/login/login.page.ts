import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isAlertOpen = false;
  alertButtons = ['OK'];
  mensaje: string = '';



  mdl_correo: string = '';
  mdl_contrasena: string = '';

  constructor(private router : Router) { }

  ngOnInit() {
  }

  login(){

    const correo = this.mdl_correo;
    const contrasena = this.mdl_contrasena;

    if(this.mdl_correo == '' && this.mdl_contrasena == ''){
      this.mensaje = 'Los campos no deben estar vacios';
      this.isAlertOpen = true;

    } else {
      
      this.router.navigate(['principal']);

    }

  }


changePassword(){

  this.router.navigate(['cambiocontrasena']);

}


useradd(){
  this.router.navigate(['registro']);
}

}
