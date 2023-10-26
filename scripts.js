import { reducer, initialState } from "./model/reducers.js";
import { addAction, subtractAction, resetAction } from "./model/actions.js";
import createStore from "./model/store.js";

const store = createStore(initialState, reducer);

// SCENARIO: Get the initial state
console.log(store.getState()); // {tally: 0}

// Subscribe a listener to the store to track state changes
const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

// SCENARIO: Increment the counter by one
store.dispatch(addAction()); // {tally: 1}
store.dispatch(addAction()); // {tally: 2}

// SCENARIO: Increment the counter by one
store.dispatch(subtractAction()); // {tally: 1}

// SCENARIO: Resetting the Tally Counter
store.dispatch(resetAction()); // {tally: 0}

// Unsubscribe the listener from the store
unsubscribe();
