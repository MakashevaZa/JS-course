/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */

function query(collection) {
    // collection
    let copy = JSON.parse(JSON.stringify(collection));
    
    // actions
    var command = [].slice.call(arguments);
    var selectRange = [];
    Object.keys(collection).forEach(function (key){
        Object.keys(collection[key]).forEach(function (keyDeeper){
            if (!selectRange.includes(keyDeeper)){
                selectRange.push(keyDeeper);
            } 
        })
    });

    if (arguments.length == 1){
        return copy;
    }
    else {
        for (var i = 1; i < command.length; i++){
            if (command[i][0]=='filterIn'){
                
                for (var j=0 ; j < collection.length; j++){
                    
                    if (!Object.keys(collection[j]).includes(command[i][1][0]) || !command[i][1][1].filter(x => x == collection[j][command[i][1][0]]).length > 0){
                        delete copy[j];
                    }
                }
            }
        
            else {
                selectRange = command[i][1].filter(x => selectRange.includes(x));
                
            }
        }
        var result = [];
        Object.keys(copy).forEach(function (key) {
            
            Object.keys(copy[key]).forEach(function (keyDeeper){
                if (!selectRange.includes(keyDeeper)){
                    delete copy[key][keyDeeper];
                    
                }
            })
            result.push(copy[key]);
        });
        return result;

    }

}

/**
 * @params {String[]}
 */
function select() {
    return ['select', [].slice.call(arguments)];
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return ['filterIn', [].slice.call(arguments)];
    
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
