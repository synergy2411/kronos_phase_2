import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { AppComponent } from './app.component';
import RootReducer from './store/reducer/root.reducer';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from "@angular/forms";
import { UserComponent } from './user/user.component'
import { HttpClientModule } from '@angular/common/http';
import { KronosLibModule } from 'kronos-lib';
import { ParentComponent } from './strategies/parent/parent.component';
import { ChildComponent } from './strategies/child/child.component';
import { NgTrackDemoComponent } from './strategies/ng-track-demo/ng-track-demo.component'


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserComponent,
    ParentComponent,
    ChildComponent,
    NgTrackDemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    KronosLibModule,
    StoreModule.forRoot({ctr : RootReducer }),
    StoreDevtoolsModule.instrument({logOnly : true}),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
