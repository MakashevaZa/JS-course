// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */

module.exports = function (command) {
    var commands = command.split('; ');
        for (var i of commands){
            var commandArray = i.split(" ");
            var commandName = commandArray[0];

            if (commandName === 'ADD') {
                return addContact(commandArray);
            } else if ( commandName === 'SHOW'){
                return showAll();
            } else { return removePhone(commandArray);
            }
        }
}

function addContact(commandArray){
    var phones = commandArray[2].split(',');
    if (phoneBook.hasOwnProperty(commandArray[1])){
         phoneBook[commandArray[1]] = phoneBook[commandArray[1]].concat(phones);
    } else {
        phoneBook[commandArray[1]]=phones;
    }
    return phoneBook;
    }

function showAll(){
    
    var showArray = [];
    for (var key of Object.keys(phoneBook).sort()){
        if (phoneBook[key].length > 0){
            showArray.push(key + ": " + phoneBook[key].join(', '));
        }
    }
    return showArray;   
    } 

 function removePhone(commandArray){
    if ([].concat(Object.values(phoneBook)).flat().includes(commandArray[1])) {
        for (var key of Object.keys(phoneBook)){
            if (phoneBook[key].includes(commandArray[1]))
            {
                phoneBook[key].splice(phoneBook[key].indexOf(commandArray[1]),1);
            }
        }               
        return true;
    }  else {
        return false;
    }

    }

    