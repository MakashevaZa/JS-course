/**
 * @param {String} date
 * @returns {Object}
 */
/*
var time = date('2017-05-16 13:45')
    .add(24, 'hours')
    .subtract(1, 'months')
    .add(3, 'days')
    .add(15, 'minutes');
console.log(time);*/

 module.exports = function (date) {
    
    //function date(time) {
    //    var timeReg = date.match(/\d+/g);
    //    var _date = new Date(timeReg[0], timeReg[1]-1, timeReg[2], timeReg[3], timeReg[4]);
      var _date = new Date(date);  
        _date.setMinutes(_date.getUTCMinutes()+ Math.abs(_date.getTimezoneOffset()));
        var periods = ['years', 'months', 'days', 'hours', 'minutes'];
        
        return {
           add: function (digit, period) {               
               if (digit < 0 || !periods.includes(period)) {throw new TypeError();}
               switch (period){
                   case 'years': _date.setFullYear(_date.getFullYear() + digit); break;
                   case 'months': _date.setMonth(_date.getMonth()+digit);break;
                   case 'days': _date.setDate(_date.getDate() + digit);break;
                   case 'hours': _date.setUTCHours(_date.getUTCHours() + digit);break;
                   case 'minutes': _date.setMinutes(_date.getMinutes() + digit);break;
               } ; 
               return this;
           },
           subtract: function (digit, period) {
            if (digit < 0 || !periods.includes(period)) {throw new TypeError();}
            switch (period){
                case 'years': _date.setFullYear(_date.getFullYear() - digit); break;
                case 'months': _date.setMonth(_date.getMonth() - digit);break;
                case 'days': _date.setDate(_date.getDate() - digit);break;
                case 'hours': _date.setUTCHours(_date.getUTCHours() - digit);break;
                case 'minutes': _date.getMinutes(_date.getMinutes() - digit);break;
            }  
            return this;
           },
           get value() {
            
            return _date.toISOString().slice(0, 16).replace('T', ' ');
            }

           
       }
 //      _date.value = _date.toISOString().slice(0, 16).replace('T', ' ');
        

    }

/*
module.exports = function(date) {
    var _date = new Date(date);
    _date.setMinutes(_date.getMinutes() + Math.abs(_date.getTimezoneOffset()));
    var SCALE = ['years', 'months', 'days', 'hours', 'minutes']
    return {
        add: function(count, scale) {
            if (count < 0 || !SCALE.includes(scale)) {
                throw new TypeError();
            }
            switch (scale) {
                case 'years':
                    _date.setFullYear(_date.getFullYear() + count);
                    break;
                case 'months':
                    _date.setMonth(_date.getMonth() + count);
                    break;
                case 'days':
                    _date.setDate(_date.getDate() + count);
                    break;
                case 'hours':
                    _date.setUTCHours(_date.getUTCHours() + count);
                    break;
                case 'minutes':
                    _date.setMinutes(_date.getMinutes() + count);
                    break;
            };
            return this;
        },
        subtract: function(count, scale) {
            if (count < 0 || !SCALE.includes(scale)) {
                throw new TypeError();
            }
            switch (scale) {
                case 'years':
                    _date.setFullYear(_date.getFullYear() - count);
                    break;
                case 'months':
                    _date.setMonth(_date.getMonth() - count);
                    break;
                case 'days':
                    _date.setDate(_date.getDate() - count);
                    break;
                case 'hours':
                    _date.setUTCHours(_date.getUTCHours() - count);
                    break;
                case 'minutes':
                    _date.setMinutes(_date.getMinutes() - count);
                    break;
            };
            return this;
        },
        get value() {
            return _date.toISOString().slice(0, 16).replace('T', ' ');
        }
    }
}*/