test("When login fails , return the reason", async () => {
  //Arrange
  const loginRequest = {username:'Yoni', 'socialNetwork: Facebook', customCodeWhenFail:null};

  //Act
  const receivedResponse = loginService.login(loginRequest);

  //Assert
  expect(receivedResponse.message.length).toBeGreaterThan(1);;
});