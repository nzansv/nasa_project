import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { StudyComponent } from './study/study.component';
import { ElementsComponent } from './elements/elements.component';
import { EarthDataComponent } from './earth-data/earth-data.component';


@NgModule({
  declarations: [
    OverviewComponent,
    StudyComponent,
    ElementsComponent,
    EarthDataComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
