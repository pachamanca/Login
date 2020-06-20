import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private Personajes: login[] = [
    {
      usuario:"danyharo",
      contrasena:"123"
    }
  ]

  constructor() { }
  getHeroes():login[]{
    return this.Personajes;
  }
}
export interface login {
  usuario: string,
  contrasena:string
  idxx?: number //propiedad opcional
}
