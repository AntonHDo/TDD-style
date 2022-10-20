const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const { returnsThree, reciprocal } = require("../problems/number-fun");

describe("returnsThree()", function () {
    it("should return the number 3", function () {
        expect(returnsThree()).to.equal(3)
    });
    //     describe("reciprocal()", function () {
    //         it("should return reciprocal of num", function () {
    //             expect(reciprocal(6)).to.equal(1 / 6)
    //             // expect(reciprocal(0)).to.throw(TypeError)
    //         })
    //     })
    //     context("Invalid Arguments", () => {
    //         it("Should throw error", () => {
    //             expect(() => reciprocal(-10)).to.throw(TypeError);
    //             expect(() => reciprocal(99999999)).to.throw(TypeError);
    //         })
    //     })
    // })
    describe("reciprocal", () => {
        context("Valid Arguments", () => {
            it("Should return reciprocal", () => {
                expect(reciprocal(5)).to.equal(1 / 5);
                expect(reciprocal(9876)).to.equal(1 / 9876);
            })
        })

        context("Invalid Arguments", () => {
            it("Should throw error", () => {
                expect(() => reciprocal(-10)).to.throw(TypeError);
                expect(() => reciprocal(99999999)).to.throw(TypeError);
            })
        })
    })

})




// describe("reverseString()", function () {
//     it("should return string reversed", function () {
//         let reversed = reverseString("fun")
//         let expected = "nuf"
//         expect(reversed).to.eql(expected)
//     });
// });
