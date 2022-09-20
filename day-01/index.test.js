const { reverseSentence,  titleCaseWords, oddishEvenish, at, anagrams, fizzBuzz, addPunctuation } = require('./index');

describe('primitive code challenges', () => {
  it('should reverse a sentence', () => {
    expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
  });
  it('should capitalize first letter of every word', () => {
    expect(titleCaseWords('dude, whEre\'s my CAR?')).toEqual('Dude, Where\'s My Car?');
  });
  it('should determine if a number is oddish or evenish', () => {
    expect(oddishEvenish(121)).toBe('evenish');
    expect(oddishEvenish(41)).toBe('oddish');
  });
  it('should take an array and index and return item located there', () => { 
    expect(at(['a', 'bravo', 'charlie', 'delta', 'e'], 2)).toEqual('charlie');
    expect(at(['a', 'bravo', 'charlie', 'delta', 'e'], -2)).toEqual('delta');
  });
  it('should determine if two words are anagrams of one another', () => {
    expect(anagrams('superintended', 'upredestined')).toBe(true);
    expect(anagrams('pictorialness', 'document')).toBe(false);
  });
  it('should return array that has numbers from 1 to n, with fizz for multiples of three and buzz for multiples of five, and fizzbuzz for multiples of both', () => {
    const arr = [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz'];
    expect(fizzBuzz(15)).toEqual(arr);
  });
  it('adds punctuation to the end of sentences', () => {
    const shout = addPunctuation('!');

    const huh = addPunctuation('?');

    const holler = shout('SAY IT');
    expect(holler).toEqual('SAY IT!');
    expect(huh('Talkin to me')).toEqual('Talkin to me?');

  });
});
