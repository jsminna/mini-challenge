var expect = chai.expect;

describe('findLongestWordLength', () => {
    it("'I will keep practicing javascript' should return 'practicing'", () => {
      expect(findLongestWordLength("I will keep practicing javascript")).to.equal('practicing');
    });
    it("' ' should return ' '", () => {
      expect(findLongestWordLength('')).to.equal('');
    });
    it("Number 12 should return ''", () => {
      expect(findLongestWordLength(12)).to.equal('');
    });
});

const arrOfFour   = [[1,2,3,4], [5,18,0,12], [3,5,12,5], [28,9,2,34]],
      arrOfThree  = [[1, 2], [2, 3], [3, 4]]

describe('findLargestOfArrays', () => {
  it('Test 1', () => {
    expect(findLargestOfArrays(arrOfFour)).to.have.ordered.members([4, 18, 12, 34])
  })
})

describe('findLargestOfArrays', () => {
  it('Test 2', () => {
    expect(findLargestOfArrays(arrOfThree)).to.have.ordered.members([2, 3, 4])
  })
})

describe('findLargestOfArrays', () => {
  it('Test 3', () => {
    expect(findLargestOfArrays(" ")).to.have.ordered.members([])
  })
})