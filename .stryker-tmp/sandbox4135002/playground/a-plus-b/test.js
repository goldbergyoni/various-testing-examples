test.skip('When 1+1, then equal 2', () => {
  //Arrange
  const a = 1;
  const b = 1;

  //Act
  const receivedResult = a + b;

  //Assert
  expect(receivedResult).toBe(2);
});