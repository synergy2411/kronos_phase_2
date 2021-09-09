import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAmEagerComponent } from './components/i-am-eager/i-am-eager.component';
import { EagerCounterService } from './services/eager-counter.service';



@NgModule({
  declarations: [IAmEagerComponent],
  imports: [
    CommonModule
  ],
  providers : [EagerCounterService],
  exports :   [IAmEagerComponent]
})
export class EagerModule { }
