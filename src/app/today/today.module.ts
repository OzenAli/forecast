import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DetailsComponent } from "../details/details.component";
import { CityFilterPipe } from "../pipes/city-filter.pipe";
import { CityOrderbyPipe } from "../pipes/city-orderby.pipe";
import { TodayComponent } from "./today.component";

@NgModule({
    declarations: [
        TodayComponent,
        DetailsComponent,
        CityFilterPipe,
        CityOrderbyPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: '', component: TodayComponent, children: [
                    { path: ':name', component: DetailsComponent }
                ]
            }
        ])
    ],
    exports: [
        TodayComponent,
        DetailsComponent
    ]
})
export class TodayModule {

}