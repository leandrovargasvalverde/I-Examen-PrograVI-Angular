import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }

  CodeError(code: string) {
    switch (code) {

      // El correo existe
      case 'auth/email-already-in-use':
        return 'El correo ya está siendo utilizado'
      
      // La dirreción de correo no es válida
      case 'auth/invalid-email':
        return 'El correo no es válido'
      case 'auth/weak-password':

      // Contraseña muy simple
        return 'La contraseña es muy corta'
      default:
        return 'Error desconocido'
    }
  }
}
