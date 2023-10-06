
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (typeof matrix == 'undefined') return [];
    let arr = matrix;
    for (let i = 0; i < arr.length; i++) {
      if (i % 2) arr[i] = arr[i].sort((a, b) => b - a);
      else arr[i] = arr[i];
    }
    return arr.flat(3);
  }

