const { reverseSentence,  titleCaseWords } = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
  });
  describe('capFirstLetter', () => {
    it('should capitalize first letter of every word', () => {
      expect(titleCaseWords('dude, whEre\'s my CAR?')).toEqual('Dude, Where\'s My Car?');
    });
  });
});
