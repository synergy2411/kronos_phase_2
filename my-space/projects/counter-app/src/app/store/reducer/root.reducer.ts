import { Action } from "@ngrx/store";
import * as rootActions from '../actions/root.actions';

const initialState = {
  counter : 0
}

function rootReducer(
    state = initialState,
    action : rootActions.counterAction){
  switch (action.type) {
    case rootActions.INCREMENT: {
      return {
        counter : state.counter + 1
      }
    }
    case rootActions.DECREMENT:{
      return {
        counter : state.counter - 1
      }
    }
    case rootActions.ADD_COUNTER: {
      return {
        counter : state.counter + action.value
      }
    }
    case rootActions.SUBTRACT_COUNTER: {
      return {
        counter : state.counter - action.value
      }
    }
    default:
      return state;
  }
}

export default rootReducer;
