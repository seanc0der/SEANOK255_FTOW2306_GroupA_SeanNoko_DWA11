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
 * @returns {Function}
 */

/** @typedef {import("./reducers.js").State} State */

/**
 * @callback GetState
 * @returns {State}
 */

/** @typedef {import("./reducers.js").Reducer} Reducer */

/**
 * @typedef {object} Methods
 * @prop {GetState} getState
 * @prop {Dispatch} dispatch
 * @prop {Subscribe} subscribe
 */

/**
 *
 * @param {State} initialState
 * @param {Reducer} reducer
 * @returns {Methods}
 */
const createStore = (initialState, reducer) => {
	/**
	 * The current state of the tally counter
	 * @type {State}
	 */
	let state = initialState;

	/**
	 * @type {Array<Function>}
	 */
	let listeners = [];

	/**
	 * @type {GetState}
	 */
	const getState = () => state;

	/**
	 * @type {Dispatch}
	 */
	const dispatch = (action) => {
		state = reducer(state, action);
		listeners.forEach((listener) => listener());
	};

	/**
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
