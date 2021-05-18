import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {StudyComponent} from './study/study.component';

const routes: Routes = [
  { path: '', component: OverviewComponent},
  { path: 'study', component: StudyComponent},
  { path: 'elements', component: StudyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
