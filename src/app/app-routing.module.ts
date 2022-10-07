import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './auth/registro/registro.component';
import { rmdir } from 'fs';

const routes: Routes = [
{path: '', redirectTo: 'conta/registrar' , pathMatch: 'full' },
{path: 'conta/registrar', component: RegistroComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
