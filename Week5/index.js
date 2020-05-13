module.exports = {
    /**
    * @param {String} event
    * @param {Object} subscriber
    * @param {Function} handler
    */
   on: function (event, subscriber, handler) {
       if (Object.keys(this.emitJar).includes(event)){
       this.emitJar[event].push([subscriber, handler]);}
       else {this.emitJar[event] = [[subscriber, handler]];}
       return this;
       },

   
   /**
    * @param {String} event
    * @param {Object} subscriber
    */
   off: function (event, subscriber) {
       this.emitJar[event] = this.emitJar[event].filter(x => x[0] != subscriber);
       return this;
   },

   /**
    * @param {String} event
    */
   emit: function (event) {
       
    for (var i = 0; i < this.emitJar[event].length; i++){
            if (this.emitJar[event][i][0]!=undefined && this.emitJar[event][i][1]!=undefined){
           this.emitJar[event][i][1].call(this.emitJar[event][i][0]);}
       }
       return this;
   },
   emitJar: {}

};