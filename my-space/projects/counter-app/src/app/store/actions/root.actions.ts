import { Action } from "@ngrx/store"

export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const ADD_COUNTER = "ADD_COUNTER"
export const SUBTRACT_COUNTER = "SUBTRACT_COUNTER"
export const STORE_RESULT = "STORE_RESULT"
export const REMOVE_RESULT = "REMOVE_RESULT"

// Action Creator Class

export class onIncrement implements Action{
  type = INCREMENT
}
export class onDecrement implements Action{
  type = DECREMENT
}
export class onAddCounter implements Action{
  type = ADD_COUNTER
  constructor(public value : number){}
}

export class onSubtractCounter implements Action{
  readonly type : string = SUBTRACT_COUNTER
  constructor(public value : number){}
}

export class onRemoveResult implements Action {
  type = REMOVE_RESULT
  constructor(public value : number){}
}

export type counterAction = onAddCounter | onSubtractCounter | onRemoveResult
