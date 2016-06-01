/**
 *  the revealing module pattern
 *
 *  simply defining all the functions and variables, private or public, inside
 *  the scope of the module and just return an anonymous object with pointers
 *  to these members that we wish to reveal as public
 *
 *  advantages:
 *      - consistency in the public api
 *      - it is clear in the end of the module which members are public
 */
var module = (function() {
    var privateGreeting = 'Greetings, world!';
    var publicGreeting = 'Hello, world!';

    function greet() {
        console.log(publicGreeting);
    }

    function setGreeting(greeting) {
        publicGreeting = greeting;
    }

    function getGreeting() {
        return privateGreeting;
    }

    return { greet: greet, set: setGreeting };
})();

module.greet();
module.set('Hi, world!');
