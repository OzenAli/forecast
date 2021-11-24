import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayComponent } from './today/today.component';
import { BursaDetailComponent } from './details/bursa-detail/bursa-detail.component';
import { IstDetailComponent } from './details/ist-detail/ist-detail.component';
import { AydinDetailComponent } from './details/aydin-detail/aydin-detail.component';
import { MuglaDetailComponent } from './details/mugla-detail/mugla-detail.component';
import { IzmirDetailComponent } from './details/izmir-detail/izmir-detail.component';
const routes: Routes = [
{
  path:'',
  component: TodayComponent
},
{
  path:'bursa-detail',
  component: BursaDetailComponent
},
{
  path:'ist-detail',
  component: IstDetailComponent
},
{
  path:'aydin-detail',
  component: AydinDetailComponent
},
{
  path:'mugla-detail',
  component: MuglaDetailComponent
},
{
  path:'izmir-detail',
  component: IzmirDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
