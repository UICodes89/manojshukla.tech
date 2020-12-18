const sinon = require("sinon");
var sinonFn = require('../sinon');
var assert = require("chai").assert;
const { expect } = require("chai");

describe("Sinon Function Fake", function() {
    it("describe sinon function is geting called or, not.", function() {
        var callback = sinon.fake();
        var proxy = sinonFn.once(callback);
        proxy();
        proxy();
        //assert(callback.called);
        assert.equal(callback.callCount, 1);
    });
    after(function() {
        sinon.restore();
    });

    // it("Sinon fake Jquery ajax call", function() {
    //     sinon.replace(jQuery, 'ajax', sinon.fake());
    //     sinonFn.getTodo(42, sinon.fake());
    //     assert(jQuery.ajax.calledWitthMatch({ url: '/todo/42/items' }))
    // });
})


describe("Sinon Spy method test", function() {
    it("spy addNumber method", function() {
        var spy = sinon.spy(sinonFn, "addNumbers");
        var arg1 = 10,
            arg2 = 20;
        var result = sinonFn.addNumbers(arg1, arg2);
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith(arg1, arg2)).to.be.true;
        expect(result).to.be.equal(30);
    });
});

describe("Mocking this metthod.", function() {
    it(" Mock sayHello method", function() {
        var mock = sinon.mock(sinonFn),
            expection = mock.expects('sayHello');
        expection.exactly(1)
        sinonFn.addNumbers(10, 20);
        expection.verify();
    });
});