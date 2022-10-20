function myMap(inputArray, cb) {
  // Your code here
  let res = []
  for (let i = 0; i < inputArray.length; i++) {
    res.push(cb(inputArray[i]))
  }
  return res
}

module.exports = myMap;
