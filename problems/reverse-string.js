function reverseString(string) {
  // Your code here

  let reversed = string.split("").reverse().join("")
  return reversed

}
console.log(reverseString("fun"))

module.exports = reverseString
