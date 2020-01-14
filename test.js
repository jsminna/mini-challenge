var expect = chai.expect;

describe('findLongestWordLength', function() {
    it("'I will keep practicing javascript' should return 'practicing'", function() {
      expect(findLongestWordLength("I will keep practicing javascript")).to.equal('practicing');
    });
    it("' ' should return ' '", function() {
      expect(findLongestWordLength('')).to.equal('');
    });
    it("Number 12 should return ''", function() {
      expect(findLongestWordLength(12)).to.equal('');
    });
});