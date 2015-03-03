/**
 * a module defined using object literal notation
 * advantages:
 *    - can assist in encapsulating and organizing code
 * disadvantages (for me):
 *    - properties/methods can't be fully hidden (everything is public)
 */
var module = {
    property: 'value',
    config: {
        language: 'en',
        cache: true
    },
    update_config: function(config) {
        if (typeof config === 'object') {
            this.config = config;
        }
    },
    display_property: function() {
        console.log('property: ' + this.property);
    }
};

module.update_config({ language: 'fr' });
module.display_property();





/**
 * the module pattern
 * advantages:
 *    - provide both public and private encapsulation to further emulate
 *      the concept of classes
 *    - "shields particular parts [of the class] from the global scope",
 *      avoiding naming conflicts with other functions or variables
 * disadvantages:
 *    - automated unit tests can't be created for private members of the module
 *
 * this pattern uses closures to encapsulate privacy, providing a way to
 * avoid functions and variables from leaking into the global scope or
 * colliding with already-defined methods and variables. only a public api
 * is returned, keeping everything else private inside the closure.
 */
var module = (function() {
    var counter = 0;

    var display = function() {
        console.log('counter: ' + counter);
    };

    return {
        increment: function() {
            display();
            return ++counter;
        },
        reset: function() {
            display();
            counter = 0;
        }
    };
})();

module.increment();
module.reset();





/**
 * import mixins
 * a variation of the module pattern where globals (e.g. jQuery) can be passed
 * as arguments to the modules's anonymous function, allowing us to import them
 * and locally alias
 */
var module = (function($) {
    $('body').addClass('active');
})(jQuery);

