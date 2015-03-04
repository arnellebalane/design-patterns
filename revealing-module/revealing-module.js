/**
 * the revealing module pattern
 *
 * simply defining all the functions and variables, private or public,
 * inside the scope of the module and just return an anonymous object
 * with pointers to these members that we wish to reveal as public
 *
 * advantages:
 *    - consistency in the public api
 *    - it is clear in the end of the module which members are public
 */
var module = (function() {
    var private_greeting = 'Greetings, world!';
    var public_greeting = 'Hello, world!';

    function greet() {
        console.log(public_greeting);
    }

    function set_greeting(greeting) {
        public_greeting = greeting;
    }

    function get_greeting() {
        return private_greeting;
    }

    return { greet: greet, set: set_greeting };
});

module.greet();
module.set('Hi, world!');

