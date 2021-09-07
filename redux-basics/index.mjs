import { createStore } from "redux";

const initialState = {
  counter: 0,
  result: [],
};

const getResult = (result, counter) => [...result, counter];

// Reducer Function
// Two Reducers - Counter | Result
function rootReducer(state = initialState, action) {
  // state.result = [...state.result, state.counter]
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
      result: getResult(state.result, state.counter),
    };
  } else if (action.type === "DECREMENT") {
    return {
      ...state, // {counter : "", result : []}
      counter: state.counter - 1,
    };
  } else if (action.type === "ADD") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  } else if (action.type === "SUBTRACT") {
    return {
      ...state,
      counter: state.counter - action.value,
    };
  } else {
    return state;
  }
}

// Store
const store = createStore(rootReducer);

// console.log(store.getState())

store.subscribe(() => {
  console.log("SUBSCRIBE : ", store.getState());
});

// Actions
const incrementAction = {
  type: "INCREMENT",
};
store.dispatch(incrementAction);

// console.log("[INCREMENT]", store.getState())

const decrementAction = {
  type: "DECREMENT",
};
store.dispatch(decrementAction);

// console.log("[DECREMENT]", store.getState())

const actionWithPayload = {
  type: "ADD",
  value: 10,
};
store.dispatch(actionWithPayload);

const SubtractActionWithPayload = {
  type: "SUBTRACT",
  value: 5,
};
store.dispatch(SubtractActionWithPayload);
