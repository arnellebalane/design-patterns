/**
 *  the singleton pattern
 *
 *  restricts instantiation of a certain class to a single object
 *
 *  if the class has not been instantiated yet, create a new instance and keep
 *  a reference to it. the next time a new instance of the class is requested,
 *  just return the same reference that was already made and stored previously.
 *
 *  there is global access to the instance (as long as they have access to the
 *  singleton class) it should not be called with the "new" keyword but instead
 *  through the public api exposed by the class.
 */
var module = (function() {
    var instance;

    function initialize() {
        var number = Math.random();

        function setNumber(num) {
            number = num;
        }

        function getNumber() {
            return number;
        }

        return { set: setNumber, get: getNumber };
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = initialize();
            }
            return instance;
        }
    };
})();

var a = module.getInstance();
var b = module.getInstance();

console.log(a.get());
console.log(b.get());
