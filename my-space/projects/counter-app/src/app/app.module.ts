import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { AppComponent } from './app.component';
import RootReducer from './store/reducer/root.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ctr : RootReducer }),
    StoreDevtoolsModule.instrument({logOnly : true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
