import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

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

      // Contraseña muy simple
      case 'auth/weak-password':
        return 'La contraseña es muy corta'

      // El usuario no existe
      case 'auth/user-not-found':
        return 'El usuario no existe'

      // Contraseña incorrecta
      case 'auth/wrong-password':
        return 'La contraseña es incorrecta'
      default:
        return 'Error desconocido'
    }
  }
}
