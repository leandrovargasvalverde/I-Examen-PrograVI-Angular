import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckEmailComponent } from './components/check-email/check-email.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register-user', component: RegisterUserComponent},
  {path: 'check-email', component: CheckEmailComponent},
  {path: 'password-recovery', component: PasswordRecoveryComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
