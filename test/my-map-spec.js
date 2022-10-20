const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);

const myMap = require("../problems/my-map")

let arr;
beforeEach(() => {
    arr = [2, 4, 6]
})
describe("myMap", () => {
    it('Should return an array passing each item through the callback', () => {
        expect(myMap(arr, (item) => item += 1)).to.eql([3, 5, 7])
    })
})
