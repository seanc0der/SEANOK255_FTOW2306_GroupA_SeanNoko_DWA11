// @ts-check

/** @typedef {import("./reducers.js").Action} Action */

/**
 * @callback Dispatch
 * @param {Action} action
 * @returns {void}
 */

/**
 * @callback Subscribe
 * @param {Function} listener
 * @returns {Function} Function to unsubscribe the listener
 */

/** @typedef {import("./reducers.js").State} State */

/**
 * @callback GetState
 * @returns {State} - The current state of the tally counter
 */

/** @typedef {import("./reducers.js").Reducer} Reducer */

/**
 * @typedef {object} Methods
 * @prop {GetState} getState - Returns the current state of the tally counter
 * @prop {Dispatch} dispatch - Dispatches an action and triggers listeners.
 * @prop {Subscribe} subscribe - Subscribes to state changes and allows components to be notified of any changes.
 */

/**
 * Creates a Redux-like store object.
 *
 * @param {State} initialState - The initial state passed to the store function
 * @param {Reducer} reducer - The function that specifies how the state updates based on the provided action
 * @returns {Methods} Object containing methods for store management
 */
const createStore = (initialState, reducer) => {
	/**
	 * The current state of the tally counter.
	 * @type {State}
	 */
	let state = initialState;

	/**
	 * The array of listener functions subscribed to the store.
	 * @type {Array<Function>}
	 */
	let listeners = [];

	/**
	 * Retrieves the current state of the tally counter.
	 * @type {GetState}
	 */
	const getState = () => state;

	/**
	 * Dispatches an action and triggers the listeners.
	 * @type {Dispatch}
	 */
	const dispatch = (action) => {
		state = reducer(action, state);
		listeners.forEach((listener) => listener());
	};

	/**
	 * Subscribes to state changes and provides an unsubscribe function.
	 * @type {Subscribe}
	 */
	const subscribe = (listener) => {
		listeners.push(listener);

		const unsubscribe = () => {
			listeners = listeners.filter((l) => l !== listener);
		};

		return unsubscribe;
	};

	return {
		getState,
		dispatch,
		subscribe,
	};
};

export default createStore;
