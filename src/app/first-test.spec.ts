describe('First Tests', () => {
  let testVariable: any;

  beforeEach(() => {
    testVariable = {};
  });
  it('It should return true when a is true', () => {
    //arrange
    testVariable.a = false;

    //act
    testVariable.a = true;

    //assert
    expect(testVariable.a).toBe(true);
  });
});
