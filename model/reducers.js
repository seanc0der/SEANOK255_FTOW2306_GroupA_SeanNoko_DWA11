/**
 * @typedef {object} State
 * @prop {number} tally - The tally value
 */

/**
 * Represents the initial state of the Tally counter.
 * @type {State}
 */
const initialState = { tally: 0 };

/**
 * @typedef {object} Action
 * @prop {"ADD" | "SUBTRACT" | "RESET"} type - The type of action.
 */

/**
 * @callback Reducer
 * @param {Action} action - The action to be performed on the tally counter.
 * @param {State} [state=initialState] - The current state of the tally counter. Defaults to the initial state.
 * @returns {State} The updated state after applying the action.
 */

/**
 * Updates the tally counter state based on the provided action.
 * @type {Reducer}
 */
const reducer = (action, state = initialState) => {
	switch (action.type) {
		case "ADD":
			return {
				...state,
				tally: state.tally + 1,
			};

		case "SUBTRACT":
			return {
				...state,
				tally: state.tally - 1,
			};

		case "RESET":
			return { tally: 0 };

		default:
			// return the unchanged state for unknown actions
			return state;
	}
};

export { reducer, initialState };
