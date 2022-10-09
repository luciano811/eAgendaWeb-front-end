import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './auth/registro/registro.component';
import { rmdir } from 'fs';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
{path: '', redirectTo: 'conta/autenticar' , pathMatch: 'full' },
{path: 'conta/autenticar', component: LoginComponent },
{path: 'conta/registrar', component: RegistroComponent },
{
  path: 'dashboard',
  loadChildren: () => import('./dashboard/dashboard.module')
  .then(m => m.DashboardModule)
}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
