function returnsThree() {
  return 3
}

function reciprocal(n) {
  if (n < 1 || n > 1000000) {
    throw new TypeError
  }
  if (n > 0 || n < 1000001) {
    return 1 / n
  } else {
  }
}



// try {
//   reciprocal(4)
//   reciprocal(0)
//   reciprocal(1111111)
// } catch {
//   if (error instanceof TypeError) {
//     console.log(error.name + ": " + error.message)
//   }
// }








module.exports = {
  returnsThree,
  reciprocal
};
