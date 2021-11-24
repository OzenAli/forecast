import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';//mat icon import ???
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { BursaDetailComponent } from './details/bursa-detail/bursa-detail.component';
import { IstDetailComponent } from './details/ist-detail/ist-detail.component';
import { AydinDetailComponent } from './details/aydin-detail/aydin-detail.component';
import { MuglaDetailComponent } from './details/mugla-detail/mugla-detail.component';
import { IzmirDetailComponent } from './details/izmir-detail/izmir-detail.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    BursaDetailComponent,
    IstDetailComponent,
    AydinDetailComponent,
    MuglaDetailComponent,
    IzmirDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
