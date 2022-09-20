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

function anagrams(wOne, wTwo) {
  const first = wOne.split('');
  const second = wTwo.split('');

  return first.map(letter => second.includes(letter)).includes(false) ? false : true;
}

function fizzBuzz(number) {
  const arr = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push ('fizzbuzz');
    } else if (i % 3 === 0) {
      arr.push('fizz');
    } else if (i % 5 === 0) {
      arr.push('buzz');
    } else arr.push(i);
  }
  return arr;
}


module.exports = { reverseSentence, titleCaseWords, oddishEvenish, at, anagrams, fizzBuzz };
