const sinon = require('sinon');
const myObj = require("../sinon");
const chai = require("chai");
var expect = chai.expect;

describe("Sinon Fake function", function() {
    it("fake callback function", function() {
        let callback = sinon.fake();
        var proxy = myObj.once(callback);
        proxy();
        expect(callback.callCount).to.be.equal(1);
    })

    it("Fake return foo", function() {
        let callback = sinon.fake.returns(false);
        expect(callback()).is.equal(false);
    })
});