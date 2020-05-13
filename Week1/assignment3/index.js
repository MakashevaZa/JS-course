/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
var newMinutes = (minutes + interval) % 60 ;
var newHours = (Math.floor((minutes + interval)/60)+hours)%24;

    if (newMinutes < 10) {
        if (newHours < 10) {
            return '0' + newHours + ":" + '0' + newMinutes;
        }
        else {return newHours + ":" + '0' + newMinutes;}
    }
    else
    {
        if (newHours < 10) {
            return '0' + newHours + ":" + newMinutes;
        }
        else {return newHours + ":" + newMinutes;}
        }
  
};
