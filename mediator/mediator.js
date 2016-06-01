/**
 *  the mediator pattern
 *
 *  handles the workflow between many other objects, aggregating the
 *  responsibilities of that workflow into a single object. useful when the
 *  system has too much direct dependencies between components, because they
 *  can act as a central place for the components to communicate through.
 *
 *  differences from pubsub:
 *      - pubsub simply acts as a pass-through for events, meaning when it
 *        receives an event, it just passes it to the subscribers and forgets
 *        about it. mediators actually decide what to do with the events based
 *        on some factors.
 *      - in pubsub, the logic is in the subscriber code, while in mediators
 *        the logic is in the mediator itself.
 **/
var users = (function() {
    var users = [];

    function add(firstname, lastname) {
        var user = { name: { first: firstname, last: lastname } };
        users.push(user);
        return user;
    }

    return { add: add };
})();

var profiles = (function() {
    function create(user) {
        user.profile = {
            avatar: 'dummy.png',
            level: 1
        };
    }

    return { create: create };
})();

var mediator = {
    addUser: function(firstname, lastname) {
        var user = users.add(firstname, lastname);
        profiles.create(user);
        console.log(user);
    }
};



// without the mediator, we'll have to write the whole workflow of creating a
// user object
var user = users.add('Arnelle', 'Balane');
profiles.create(user);
console.log(user);

// with the mediator, we simply have to call the appropriate mediator function
// to perform the user creation workflow, hiding away the complexities of
// creating a user object
mediator.addUser('Arnelle', 'Balane');
