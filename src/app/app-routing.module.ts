import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './form/users/user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'today', pathMatch: 'full' },
  { path: 'today',loadChildren: () => import('./today/today.module').then(m=> m.TodayModule) },
  { path: 'form',loadChildren: () => import('./form/form.module').then(m=> m.FormModule) },
  { path: 'users', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
