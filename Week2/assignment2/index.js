/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    
    hashtags.forEach(funclowercase);
    var filteredArray = hashtags.reduce(filterHashtags, []);
    var result = filteredArray.join(", ");
    return result; 
    function filterHashtags(acc, item){
    
        if (acc.indexOf(item) == -1)
        {   
            acc.push(item);
        }
       return acc;
    }
    
    function funclowercase(hashtag, index){
        hashtags[index]=hashtag.toLowerCase();
    }
};
