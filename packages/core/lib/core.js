"use strict";

/**
 * Add up all the arguments
 */
function add() {
  const args = Object.values(arguments);

  return args.reduce((prev, next) => {
    return prev + next;
  });
}

/**
 * Subtract down all the arugments
 */
function subtract() {
  const args = Object.values(arguments);

  return args.reduce((prev, next) => {
    return prev - next;
  });
}

module.exports = {
  add,
  subtract,
};
