
module.exports = function towelSort(matrix) {
  const arr = []

  if (!matrix) {
    return arr
  }
  else {
    matrix.forEach((item, i) => {
      if (i % 2 === 0) {
        arr.push(item)
      } else {
        arr.push(item.reverse())
      }
    });
    return arr.flat()
  }
}