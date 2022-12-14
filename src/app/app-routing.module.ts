import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './auth/registro/registro.component';
import { rmdir } from 'fs';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/services/auth.guard';
import { LoginGuard } from './auth/services/login.guard';

const routes: Routes = [
{path: '', redirectTo: 'conta/autenticar' , pathMatch: 'full' },
{path: 'conta/autenticar', component: LoginComponent, canActivate: [LoginGuard] },
{path: 'conta/registrar', component: RegistroComponent, canActivate: [LoginGuard] },
{
  path: 'dashboard',
  loadChildren: () => import('./dashboard/dashboard.module')
  .then(m => m.DashboardModule),
  canActivate: [AuthGuard]
},
{
  path: 'tarefas',
  loadChildren: () => import('./tarefas/tarefa.module')
    .then(m => m.TarefaModule)
},

{
  path: 'contatos',
  loadChildren: () => import('./contatos/contato.module')
    .then(m => m.ContatoModule)
}


]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
