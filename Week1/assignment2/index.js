/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {
return (0 <= hours) && (hours < 24) && (0 <= minutes) && (minutes < 60);
};

