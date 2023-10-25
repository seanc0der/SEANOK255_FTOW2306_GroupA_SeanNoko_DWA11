/**
 *
 * The state of the Tally counter
 * @typedef {object} State
 * @prop {number} tally The current value of the tally counter.
 */

/**
 * Represents the initial state of the Tally counter.
 * @type {State}
 */
const initialState = { tally: 0 };

/**
 * Represents the available actions for manipulating the tally counter.
 * @typedef {object} Action
 * @prop {"ADD" | "SUBTRACT" | "RESET"} type
 */

/**
 * Takes in the current tally (`state`) of the tally counter and the type of
 * `action` to be performed on it, applies the action, and returns a new current
 * state object.
 *
 * @param {State} [state=initialState] - The current state of the tally counter. Defaults to the initial state.
 * @param {Action} action - The action to be performed on the tally counter.
 * @returns {State} The updated state after applying the action.
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
