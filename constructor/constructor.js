/**
 * in classical object-oriented programming, a constructor is a special method
 * used to initialize a newly created object once memory has been allocated for
 * it. since almost everything in Javascript is an object, we're most often
 * interested in _object constructors_.
 *
 * _object constructors_ are used to create specific types of objects - both
 * preparing for use and accepting arguments which a constructor can use to set
 * the values of member properties and methods when the object is created.
 */





/**
 * a basic constructor
 * problems with this implementation:
 *    - makes inheritance difficult
 *    - functions (e.g. toString) are redefined for each new instance of the
 *      Car constructor instead of ideally being shared between all instances
 */
function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;

    this.toString = function() {
        return this.model + ' has done ' + this.miles + ' miles';
    };
}


var civic = new Car('Honda Civic', 2009, 20000);
var mondeo = new Car('Ford Mondeo', 2010, 5000);

console.log(civic);
console.log(mondeo);





/**
 * constructor with prototypes
 * advantages of this implementation:
 *    - when instantiating a new object from the contructor, all properties in
 *      the constructor's prototype are then made available to that instance
 *    - a single function instance (e.g. toString) will now be shared between
 *      all instances of the Car constructor
 */
function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

Car.prototype.toString = function() {
    return this.model + ' has done ' + this.miles + ' miles';
};


var civic = new Car('Honda Civic', 2009, 20000);
var mondeo = new Car('Ford Mondeo', 2010, 5000);

console.log(civic);
console.log(mondeo);

