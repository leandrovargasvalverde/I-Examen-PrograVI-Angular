import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// Modulos
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { CheckEmailComponent } from './components/check-email/check-email.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

import { environment } from 'src/environments/environment.development';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterUserComponent,
    CheckEmailComponent,
    PasswordRecoveryComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
