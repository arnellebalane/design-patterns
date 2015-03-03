/**
 * the singleton pattern
 * restricts instantiation of a certain class to a single object
 *
 * if the class has not been instantiated yet, create a new instance
 * and keep a reference to it. the next time a new instance of the
 * class is requested, just return the same reference that was already
 * made and stored previously.
 *
 * there is global access to the instance (as long as they have access
 * to the singleton class) it should not be called with the "new" keyword
 * but instead through the public api exposed by the class.
 */
var module = (function() {
    var instance;

    function initialize() {
        var number = Math.random();

        function set_number(num) {
            number = num;
        }

        function get_number() {
            return number;
        }

        return { set: set_number, get: get_number };
    }

    return {
        get_instance: function() {
            if (!instance) {
                instance = initialize();
            }
            return instance;
        }
    };
})();

var a = module.get_instance();
var b = module.get_instance();

console.log(a.get());
console.log(b.get());

