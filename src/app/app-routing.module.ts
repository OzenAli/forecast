import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';
import { TodayComponent } from './today/today.component';
const routes: Routes = [
  { path: 'form', component: FormComponent },
  {
    path: '', component: TodayComponent, children: [
      { path: ':name', component: DetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
