import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { StudyComponent } from './study/study.component';
import { ElementsComponent } from './elements/elements.component';


@NgModule({
  declarations: [
    OverviewComponent,
    StudyComponent,
    ElementsComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
