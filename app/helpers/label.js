/**
* Copyright (c) 2015 Nils Knappmeier
* https://github.com/bootprint/bootprint-openapi
*
* @license MIT
**/

/**
 * Translate to locale label if provided.
 * @param o
 * @returns {boolean}
 */
function isUndefined(o) {
  return typeof o === "undefined";
}

/**
 * Translate to locale label if provided.
 * @param value
 * @returns {boolean}
 */
module.exports = function (value) {
  const { resources = {} } = global.locale;
  return isUndefined(resources[value]) ? value : resources[value];
};
