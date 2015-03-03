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

