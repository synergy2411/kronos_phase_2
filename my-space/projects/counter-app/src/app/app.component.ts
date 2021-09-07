import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
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

  constructor(private store : Store<any>){}

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
}
