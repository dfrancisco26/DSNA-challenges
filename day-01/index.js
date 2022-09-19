function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function titleCaseWords(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

function oddishEvenish(number) {
  let num = 0;
  number
    .toString()
    .split('')
    .map(number => num += Number(number));
  return num % 2 === 0 ? 'evenish' : 'oddish';
}

function at(arr, i) {
  return i >= 0 ? arr[i] : arr[arr.length + i];
}

module.exports = { reverseSentence, titleCaseWords, oddishEvenish, at };
