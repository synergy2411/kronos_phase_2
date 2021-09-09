import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlaceholderDirective } from './directives/placeholder.directive';
import { RegisterComponent } from './register/register.component';
import * as rootActions from './store/actions/root.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'counter-app';
  counter : number;
  result : Array<number>;

  @ViewChild(PlaceholderDirective, {static : false}) registerCmpHost : any;

  constructor(
    private store : Store<any>,
    private crFactory : ComponentFactoryResolver
    ){}

    loadDynamicComponent(){
      const registerCmpFactory = this.crFactory.resolveComponentFactory(RegisterComponent);
      const vcRefHost = this.registerCmpHost.vcRef;
      vcRefHost.clear()
      vcRefHost.createComponent(registerCmpFactory)
    }

  ngOnInit(){
    this.store.subscribe((data : any) => {
      this.counter = data['ctr'].counter
      this.result = data['ctr'].result
    })
  }

  onIncrease(){
    this.store.dispatch({type : rootActions.INCREMENT})
  }

  onDecrease(){
    this.store.dispatch({type : rootActions.DECREMENT})
  }

  onAddCounter(value : number){
    // this.store.dispatch({type : rootActions.ADD_COUNTER, value})
    this.store.dispatch(new rootActions.onAddCounter(value))
  }

  onSubtractCounter(value : number){
    this.store.dispatch(new rootActions.onSubtractCounter(value))
  }

  onStoreResult(){
    this.store.dispatch({type : rootActions.STORE_RESULT})
  }

  onRemoveResult(idx : number){
    this.store.dispatch(new rootActions.onRemoveResult(idx))
  }

  onWorkerExecute(){
  }
}

// if (typeof Worker !== 'undefined') {
//   // Create a new
//   const worker = new Worker(new URL('./app.worker'));
//   worker.onmessage = ({ data }) => {
//     console.log(`page got message: ${data}`);
//   };
//   worker.postMessage('hello');
// } else {
//   // Web workers are not supported in this environment.
//   // You should add a fallback so that your program still executes correctly.
// }
