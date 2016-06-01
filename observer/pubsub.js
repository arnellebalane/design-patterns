/**
 *  the publish/subscribe pattern
 *
 *  a third-party object lies between the subjects and observers, acting as an
 *  events channel between them. the observers will then have to subscribe for
 *  events in the pubsub object instead of directly subscribing the subject,
 *  and subjects will then have to publish events through the pubsub object
 *
 *  advantages:
 *      - avoids dependencies between subjects and observers. they both only
 *        need to care about communicating with the pubsub object and not
 *        caring about each other
 *      - encourages us developers to think about the relationships between the
 *        subjects and the observers so that we can break them down properly
 *        into smaller, reusable and easy to maintain blocks
 *
 *  disadvantages:
 *      - due to the decoupled nature of the pattern, it's difficult to obtain
 *        guarantees that particular parts of the system are functioning
 *        as expected
 **/
var pubsub = (function() {
    var topics = {};

    function publish(topic) {
        if (!(topic in topics)) {
            return null;
        }
        var args = Array.prototype.slice.call(arguments, 1);
        topics[topic].forEach(function(callback) {
            callback.apply(null, args);
        });
    }

    function subscribe(topic, callback) {
        if (!(topic in topics)) {
            topics[topic] = [];
        }
        topics[topic].push(callback);
    }

    function unsubscribe(topic, callback) {
        if (!(topic in topics)) {
            return null;
        }
        if (typeof callback === 'function') {
            var index = topics[topic].indexOf(callback);
            topics[topic].splice(index, 1);
        }
        if (typeof callback !== 'function' || topics[topic].length === 0) {
            delete topics[topic];
        }
    }

    return {
        publish: publish,
        subscribe: subscribe,
        unsubscribe: unsubscribe
    };
})();



// Pubsub pattern usage example

pubsub.subscribe('event', function(a, b, c) {
    console.info(a, b, c);
});

pubsub.publish('event', 1, 2, 3);
pubsub.publish('event', 4, 5, 6);
