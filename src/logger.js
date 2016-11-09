const LOG = 'log'
const ERROR = 'error'
const WARNING = 'warning'
const DEBUG = 'degub'
const INFO = 'info'

/**
 * Prints to the console if it exists using the specified method.
 *
 * @param {string} action The log method to be used.
 * @param {...*} messages One or more messages or objects to be printed.
 * @returns {void}
 */
function execute(action, ...messages) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console[action] === 'function') {
    console[action](...messages)
  }
  /* eslint-enable no-console */
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {...*} messages One or more messages or objects to be printed.
 * @returns {void}
 */
export const warning = (...message) => execute(WARNING, ...message)

/**
 * Prints an error in the console if it exists.
 *
 * @param {...*} messages One or more messages or objects to be printed.
 * @returns {void}
 */
export const error = (...message) => execute(ERROR, ...message)

/**
 * Prints a debug message in the console if it exists.
 *
 * @param {...*} messages One or more messages or objects to be printed.
 * @returns {void}
 */
export const debug = (...message) => execute(DEBUG, ...message)

/**
 * Prints an info message in the console if it exists.
 *
 * @param {...*} messages One or more messages or objects to be printed.
 * @returns {void}
 */
export const info = (...message) => execute(INFO, ...message)

/**
 * Prints a log message in the console if it exists.
 *
 * @param {...*} messages One or more messages or objects to be printed.
 * @returns {void}
 */
export const log = (...message) => execute(LOG, ...message)

const logger = { log, info, debug, warning, error }
export default logger
