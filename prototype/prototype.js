/**
 *  the prototype pattern
 *
 *  a way to achieve prototypal inheritance by creating objects which can act
 *  act as prototypes for other objects. unlike using classes, ti gives a
 *  performance boost as different object of the same prototype inherits the
 *  prototype properties by reference, meaning all objects will point to the
 *  same functions instead of creating their own copies.
 **/
var vehiclePrototypeOne = {
    brand: 'Ford',
    getBrand: function() {
        return this.brand;
    }
};



// using Object.create
var vehicle = Object.create(vehiclePrototypeOne);
console.log(vehicle.getBrand());



// using Object.create with optional properties to add to the created object
var vehicle = Object.create(vehiclePrototypeOne, {
    brand: {
        value: 'Audi',
        enumerable: true
    }
});
console.log(vehicle.getBrand());



// without using Object.create
var vehiclePrototypeTwo = {
    init: function(brand) {
        this.brand = brand;
    },
    getBrand: function() {
        return this.brand;
    }
};

function Vehicle(brand) {
    function F() {}
    F.prototype =  vehiclePrototypeTwo;

    var f = new F();
    f.init(brand);
    return f;
}

var vehicle = Vehicle('Ford');
console.log(vehicle.getBrand());



// another alternative
var Vehicle = (function() {
    function F() {}

    return function(prototype) {
        F.prototype = prototype;
        return new F();
    };
})();

var vehicle = Vehicle(vehiclePrototypeOne);
console.log(vehicle.brand);
