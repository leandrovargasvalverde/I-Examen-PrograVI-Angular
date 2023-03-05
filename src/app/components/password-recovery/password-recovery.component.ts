import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent {

  recoverUser: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService) {
    this.recoverUser = this.fb.group({
      email: ['', [Validators.required , Validators.email]]
    })
  }

  recover() {
    const email = this.recoverUser.value.email;
    this.loading = true;
    this.afAuth.sendPasswordResetEmail(email).then(() => {
      this.toastr.success('Se envió un mensaje a su correo para restablecer su contraseña de ingreso','Recuperar contraseña')
      this.router.navigate(['/login'])

    }).catch((error) => {
      this.loading = false;
      this.toastr.error(this.firebaseError.CodeError(error.code), 'ERROR')
    })
  }
}
