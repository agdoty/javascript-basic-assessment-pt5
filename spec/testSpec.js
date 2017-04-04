describe("isDivisibleByThree", function(){
  it("should exist", function(){
    expect(isDivisibleByThree).toEqual(jasmine.any(Function));
  })
  it("should return all numbers divisible by three", function(){
    var res = isDivisibleByThree([1,2,3,4,5,9,18,28,333]);
    expect(res).toEqual([3,9,18,333]);
  })
})
describe("lollipopFactory", function(){
  it("Should exist", function(){
    expect(lollipopFactory).toEqual(jasmine.any(Function));
  })
  it("Should output the correct string", function(){
    expect(lollipopFactory('good', 9, true)).toEqual("a perfect lolli!");
    expect(lollipopFactory('loose', 10, false)).toEqual("eh.. passable");
    expect(lollipopFactory('good', 6, true)).toEqual("good enough");
    expect(lollipopFactory('good', 8, true)).toEqual("good enough");
    expect(lollipopFactory('none', 2, false)).toEqual("i wouldn't even give this to my dog");
  })
})
//test should take in a parameter and
