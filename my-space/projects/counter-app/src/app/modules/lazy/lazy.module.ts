import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IAmLazyComponent } from './components/i-am-lazy/i-am-lazy.component';

const LAZY_ROUTES : Routes = [{
  path : "",
  component : IAmLazyComponent
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(LAZY_ROUTES)
  ]
})
export class LazyModule { }
