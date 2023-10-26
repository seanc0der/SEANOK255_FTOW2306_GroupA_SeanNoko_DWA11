/* eslint-disable no-console */

import { reducer, initialState } from "./model/reducers.js";
import { addAction, subtractAction, resetAction } from "./model/actions.js";
import createStore from "./model/store.js";

const store = createStore(initialState, reducer);

// SCENARIO: Get the initial state
console.log(store.getState());

// Subscribe a listener to the store to track state changes
const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

// SCENARIO: Increment the counter by one
store.dispatch(addAction());
store.dispatch(addAction());

// SCENARIO: Decrement the counter by one
store.dispatch(subtractAction());

// SCENARIO: Resetting the Tally Counter
store.dispatch(resetAction());

unsubscribe();
