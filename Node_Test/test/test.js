// const { throws } = require('assert');
// var assert = require('assert');
// const { exception } = require('console');
// var chai = require('chai').assert;
// var expect = require('chai').expect
// var sinon = require('sinon');
// var myClass = require('../index');
// describe('Array', function() {
//     describe('#indexOf()', function() {
//         it('should return -1 when the value is not present', function() {
//             chai.equal([1, 2, 3].indexOf(4), -1);
//         });
//     });
// });


// /**
//  * before
//  * beforeEach
//  * after
//  * afterEach 
//  */

// /**
//  * Should - chai.should()
//  * foo.should.be a("string")
//  * foo.should.be.equal()
//  * foo.should.have.length(3)
//  * foo.should.have.propertty('flavour').with.lengthOf(3)
//  */


// // describe("Assert", function() {

// //     beforeEach(function() {
// //         this.foo = "bar";
// //         this.userName = "mshukla";
// //         this.user = {
// //             _id: '12345',
// //             fname: 'Manoj',
// //             lname: 'shukla',
// //             age: 20
// //         };
// //     })
// //     it("Check value is present in an arrray or not", function(done) {
// //         chai.equal([1, 3, 45, 6].indexOf(3), 1)
// //         throws.foo = 12;
// //         done()
// //     })
// //     it("check input value is an object.", function(done) {
// //         expect(this.foo).to.be.a('string');
// //         done()
// //     })
// //     it("check input value is an object.", function(done) {
// //         expect(this.userName).to.be.a('string').with.lengthOf(7);
// //         done()
// //     })
// //     describe("USER", function() {
// //         it("check age property is availabe in object or not", function(done) {
// //             expect(this.user).to.have.property('age').with.equal(20)
// //             done()
// //         })
// //         it("check age property is availabe in object or not", function(done) {
// //             expect(this.user).to.have.property('age').with.equal(20)
// //             done()
// //         })
// //     })

// //     afterEach(function() {
// //         this.foo = 23;
// //     })
// // })

// // //sinon
// // afterEach(() => {
// //     // Restore the default sandbox here
// //     sinon.restore();
// // });

// // describe("SINON", function() {
// //     describe("SINON FAKE", function() {
// //         it("Sinon check", function(done) {
// //             var fake = sinon.fake();
// //             fake()
// //             done()
// //         })

// //         it("Sinon fake return", function(done) {
// //             var fake = sinon.fake.returns("Hello World");

// //             expect(fake()).to.equal("Hello World");
// //             done()
// //         })
// //     })
// //     describe("SPY", function() {
// //         var object = {
// //             get test() {
// //                 return this.property;
// //             },
// //             set test(value) {
// //                 this.property = value * 2;
// //             }
// //         };
// //         var spy = sinon.spy(object, "test", ["get", "set"]);
// //         object.test = 42;
// //         it("spying on Object", function() {
// //             assert(spy.set.calledOnce);
// //             expect(object.test).to.equals(84);
// //             assert(spy.get.calledOnce);
// //         })

// //     })

// // })



// describe("Sinon SPY", function() {
//     var myObj = new myClass();
//     // it("spy the add method", function() {

//     //     var spy = sinon.spy(myObj, "add");
//     //     var arg1 = 10,
//     //         arg2 = 20;
//     //     myObj.callAnotherFn(arg1, arg2);
//     //     //sinon.assert.calledOnce(spy);
//     //     expect(spy.calledOnce).to.be.true
//     // })

//     it("Mock function", function() {
//         var mock = sinon.mock(myObj);
//         var expection = mock.expects("sayHello");
//         expection.exactly(1)
//         myObj.callAnotherFn(10, 20)
//         mock.verify();
//     })
// })