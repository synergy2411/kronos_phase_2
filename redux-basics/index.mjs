import { createStore } from 'redux';

const initialState = {
    counter : 0,
    result : []
}

// Reducer Function
function rootReducer(state = initialState, action){
    if(action.type === "INCREMENT"){
        return {
            counter : state.counter + 1
        }
    } else if(action.type === "DECREMENT"){
        return {
            counter : state.counter - 1
        }
    } else if(action.type === "ADD"){
        return {
            counter : state.counter + action.value
        }
    }else if(action.type === "SUBTRACT"){
        return {
            counter : state.counter - action.value
        }
    }
    else{
        return state;
    }
}

// Store
const store = createStore(rootReducer)

// console.log(store.getState())

store.subscribe(() => {
    console.log("SUBSCRIBE : ", store.getState())
})

// Actions
const incrementAction = {
    type : "INCREMENT"
}
store.dispatch(incrementAction)

// console.log("[INCREMENT]", store.getState())

const decrementAction = {
    type : "DECREMENT"
}
store.dispatch(decrementAction)

// console.log("[DECREMENT]", store.getState())

const actionWithPayload = {
    type : "ADD",
    value : 10
}
store.dispatch(actionWithPayload)

const SubtractActionWithPayload = {
    type : "SUBTRACT",
    value : 5
}
store.dispatch(SubtractActionWithPayload)