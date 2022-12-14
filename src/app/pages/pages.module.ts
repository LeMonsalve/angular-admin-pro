import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {GraphOneComponent} from "./graph-one/graph-one.component";
import {ProgressComponent} from "./progress/progress.component";
import { PagesComponent } from './pages.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    DashboardComponent,
    GraphOneComponent,
    ProgressComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
