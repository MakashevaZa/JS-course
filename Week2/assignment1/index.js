/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {

    var arrayOfwords = tweet.split(' ');

var result = [];
/*
arrayOfwords.forEach(finder) ;
function finder(word){
if (word.startsWith('#'))
{
    result.push(word.slice(1));
}
} 
*/
return arrayOfwords.reduce(finder, []);
function finder(acc, item) {
if (item.startsWith('#'))
{
    acc.push(item.slice(1));
}
return acc;
}

};
