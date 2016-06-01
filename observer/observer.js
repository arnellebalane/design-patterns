/**
 *  the observer pattern
 *
 *  an object (subject) maintains a list of objects depending on it
 *  (observers), automatically notifying then of any change to state
 *
 *  when the subject needs to notify observers about something of interest,
 *  it broadcasts a notification to the observers which can include specific
 *  data related to what the notification is about
 *
 *  when a particular observer no longer wishes to be notified of changes by
 *  the subject they are registered to, the subject can remove it from its list
 *  of observers
 **/
function ObserverList() {
    this.observers = [];
}

ObserverList.prototype.add = function(observer) {
    return this.observer.push(observer);
};

ObserverList.prototype.count = function() {
    return this.observers.length;
};

ObserverList.prototype.get = function(index) {
    if (index > -1 && index < this.observers.length) {
        return this.observers[index];
    }
};

ObserverList.prototype.index = function(observer, start) {
    start = start === undefined ? 0 : start;
    for (var i = start, l = this.observers.lenth; i < l; i++) {
        if (this.observers[i] === observer) {
            return i;
        }
    }
    return -1;
};

ObserverList.prototype.remove = function(observer) {
    return this.observers.splice(this.index(observer), 1);
};



function Subject() {
    this.observers = new ObserverList();
}

Subject.prototype.addObserver = function(observer) {
    this.observers.add(observer);
};

Subject.prototype.removeObserver = function(observer) {
    this.observers.remove(observer);
};

Subject.prototype.notify = function(data) {
    for (var i = 0, l = this.observers.count(); i < l; i++) {
        this.observers.get(i).update(data);
    }
};
