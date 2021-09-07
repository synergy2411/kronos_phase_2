import { Action} from "@ngrx/store";
import * as rootActions from '../actions/root.actions';

const initialState = {
  counter : 0,
  result : []
}

function rootReducer(
    state = initialState,
    action : rootActions.counterAction){
  switch (action.type) {
    case rootActions.INCREMENT: {
      return {
        ...state,
        counter : state.counter + 1
      }
    }
    case rootActions.DECREMENT:{
      return {
        ...state,
        counter : state.counter - 1
      }
    }
    case rootActions.ADD_COUNTER: {
      return {
        ...state,
        counter : state.counter + action.value
      }
    }
    case rootActions.SUBTRACT_COUNTER: {
      return {
        ...state,
        counter : state.counter - action.value
      }
    }
    case rootActions.STORE_RESULT : {
      return {
        ...state,     // {counter : 0, result : []}
        result : [...state.result, state.counter]
      }
    }
    case rootActions.REMOVE_RESULT: {
      const duplicateResult = [...state.result]
      duplicateResult.splice(action.value, 1)
      return {
        ...state,
        result : duplicateResult
      }
    }
    default:
      return state;
  }
}

export default rootReducer;
