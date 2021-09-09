import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IAmLazyComponent } from './components/i-am-lazy/i-am-lazy.component';
import { LazyCounterService } from './services/lazy-counter.service';
import { SharedModule } from '../shared/shared.module';

const LAZY_ROUTES : Routes = [{
  path : "",
  component : IAmLazyComponent
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(LAZY_ROUTES)
  ],
  providers : [LazyCounterService]
})
export class LazyModule { }
