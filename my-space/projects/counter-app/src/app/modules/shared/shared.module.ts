import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCounterService } from './services/shared-counter.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  // providers : [SharedCounterService]
})
export class SharedModule {
  static forRoot() : ModuleWithProviders<any>{
    return {
      ngModule : SharedModule,
      providers :   [SharedCounterService]
    }
  }
}
