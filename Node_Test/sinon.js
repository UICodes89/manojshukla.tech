function once(fn) {
    var returnValue, called = false;
    return function() {
        if (!called) {
            called = true;
            returnValue = fn.apply(this, arguments)
        }
        return returnValue;
    }
}

function getTodo(listId, callback) {
    jQuery.ajax({
        url: '/todo/' + listId + '/items',
        success: function(data) {
            callback(null, data);
        }
    })
}

function addNumbers(arg1, arg2) {
    this.sayHello();
    var result = arg1 + arg2;
    return result;
}

/**
 * @mocking
 */

function sayHello() {
    console.log("Hello World !!");
}

module.exports = {
    once,
    getTodo,
    addNumbers,
    sayHello
};