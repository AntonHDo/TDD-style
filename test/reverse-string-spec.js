// Your code here

const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const reverseString = require("../problems/reverse-string");

describe("reverseString()", function() {
    it("should return string reversed", function() {
        let reversed = reverseString("fun")
        let expected = "nuf"
    expect(reversed).to.eql(expected)
  });
});
