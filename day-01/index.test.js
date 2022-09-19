const { reverseSentence,  titleCaseWords, oddishEvenish, at } = require('./index');

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
});
