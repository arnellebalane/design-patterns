// three ways to create new objects in Javascript
var a = {};
var b = Object.create(Object.prototype);
var c = new Object();





// four ways to assign and retrieve keys and values to an object
var object = {};

// 1. dot syntax
object.key = 'value';
var value = object.key;

// 2. square bracket syntax
object['key'] = 'value';
var value = object['key'];

// 3. Object.defineProperty (ES5 only, retrieving values is same as 1 and 2)
Object.defineProperty(object, 'key', {
    value: 'value',
    writable: true,
    enumerable: true,
    configurable: true
});

// 4. Object.defineProperties (ES5 only, retrieving values is same as 1 and 2)
Object.defineProperties(object, {
    'key': {
        value: 'value',
        writable: true
    },
    'another_key': {
        value: 'another value',
        writable: true
    }
});

