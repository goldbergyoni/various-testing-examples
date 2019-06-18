test("When two new users are saved, It should calls the data access twice", async () => {
  //Arrange
  const firstUserToSave = {name: 'Yoni'};
  const secondUserToSave = {name: 'George'};
  const DALMock = sinong.mock(DAL);
  DALMock.expects("saveUser").once().withArgs(firstUserToSave, secondUserToSave);

  //Act
  usersService.add(firstUserToSave , secondUserToSave);

  //Assert
  DALMock.verify();
  
});


nock("http://localhost/user/")
        .get(`/1`)
        .reply(200, { id: 1, name: "John" });

const orderAddResult = await request(expressApp)
        .post("/order")
        .send(orderToAdd);

test("When new order is added , Expectation: should not return", async () => {
  //Arrange
  

  //Act
  const receivedResponse;

  //Assert
  expect(receivedResponse).toBeNull();
});
























