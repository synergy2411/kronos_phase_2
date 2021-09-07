import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import RootReducer from './store/reducer/root.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ctr : RootReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
