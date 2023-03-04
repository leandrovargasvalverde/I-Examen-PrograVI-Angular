import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  registerUser: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError : FirebaseCodeErrorService) {
    this.registerUser = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatpassword: ['', Validators.required],
    })
  }
  register() {
    const email = this.registerUser.value.email;
    const password = this.registerUser.value.password;
    const repeatpassword = this.registerUser.value.repeatpassword;

    if (password != repeatpassword) {
      this.toastr.error('Las contraseñas ingresadas deben ser iguales', 'ERROR');
      return;
    }

    this.loading = true;
    this.afAuth.createUserWithEmailAndPassword(email, password).then(() => {
      this.toastr.success('El usuario fue registrado de manera exitosa', 'EXCELENTE')
      this.router.navigate(['/login']);
    }).catch((error) => {
      this.loading = false;
      this.toastr.error(this.firebaseError.CodeError(error.code), 'ERROR')
    })
  }


}
