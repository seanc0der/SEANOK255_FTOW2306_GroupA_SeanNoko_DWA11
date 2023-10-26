// @ts-check

/**
 * Returns an action object for incrementing the tally counter.
 * @returns {{type: "ADD"}}
 */
const addAction = () => ({ type: "ADD" });

/**
 * Returns an action object for decrementing the tally counter.
 * @returns {{type: "SUBTRACT"}}
 */
const subtractAction = () => ({ type: "SUBTRACT" });

/**
 * Returns an action object for resetting the tally counter.
 * @returns {{type: "RESET"}}
 */
const resetAction = () => ({ type: "RESET" });

export { addAction, subtractAction, resetAction };
