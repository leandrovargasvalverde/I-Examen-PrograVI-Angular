import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { FirebaseCodeErrorEnum } from '../utilities/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }

  CodeError(code: string) {
    switch (code) {

      // El correo existe
      case FirebaseCodeErrorEnum.EmailAlreadyInUse:
        return 'El correo ya está siendo utilizado'

      // La dirreción de correo no es válida
      case FirebaseCodeErrorEnum.InvalidEmail:
        return 'El correo no es válido'

      // Contraseña muy simple
      case FirebaseCodeErrorEnum.WeakPassword:
        return 'La contraseña es muy corta'

      // El usuario no existe
      case FirebaseCodeErrorEnum.UserNotFound:
        return 'El usuario no existe'

      // Contraseña incorrecta
      case FirebaseCodeErrorEnum.WrongPassword:
        return 'La contraseña es incorrecta'
      default:
        return 'Error desconocido'
    }
  }
}
