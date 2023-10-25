// @ts-check

/**
 * Returns an action object for incrementing the tally counter.
 * @returns {{type: "ADD"}}
 */
const incrementAction = () => ({ type: "ADD" });

/**
 * Returns an action object for decrementing the tally counter.
 * @returns {{type: "SUBTRACT"}}
 */
const decrementAction = () => ({ type: "SUBTRACT" });

/**
 * Returns an action object for resetting the tally counter.
 * @returns {{type: "RESET"}}
 */
const resetAction = () => ({ type: "RESET" });

export { incrementAction, decrementAction, resetAction };
