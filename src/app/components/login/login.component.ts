import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginUser: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router) {
    this.loginUser = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  login() {
    const email = this.loginUser.value.email;
    const password = this.loginUser.value.password;

    this.loading = true;
    this.afAuth.signInWithEmailAndPassword(email, password).then((user) => {
      this.router.navigate(['/dashboard']);
    }).catch((error) => {
      this.loading = false;
      console.log(error);
    })
  }
}