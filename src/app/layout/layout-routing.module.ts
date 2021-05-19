import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {StudyComponent} from './study/study.component';
import {ElementsComponent} from './elements/elements.component';
import {EarthDataComponent} from './earth-data/earth-data.component';

const routes: Routes = [
  { path: '', component: OverviewComponent},
  { path: 'study', component: StudyComponent},
  { path: 'elements', component: ElementsComponent},
  { path: 'earth-data', component: EarthDataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
