import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert';
import Swal2 from 'sweetalert2';

import { Router } from '@angular/router';
import { AppService, login } from '../../service/app.service';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  
  sesion:login[]=[];

  constructor(private _route:Router, private _sesionservice:AppService) { }
  
  ngOnInit() {
    this.sesion=this._sesionservice.getHeroes(); //treae el array de objetos y almacena en sesion
  }
  mostrar=true;
  verificar(usu:string, contra:string){
    usu.toLowerCase();
    for (let i = 0; i < this.sesion.length; i++) {
      if (usu==this.sesion[i].usuario && contra==this.sesion[i].contrasena) {
        this._route.navigate(["principal"]);
        this.mostrar=!this.mostrar
        Swal2.fire({
          icon: 'success',
          title: ' Bienvenido !',
        })
       
        
        return this.mostrar;
      }else{
        Swal2.fire({
          icon: 'error',
          text: 'Usuario o contraseña incorrecto!',
        })
      }
    }    
    
  }

}
