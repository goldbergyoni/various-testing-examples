test("when an expired token is used, return 403 error", () => {
    //Arrange
    sinon.stub(myFaceBookConnector, 'verify').reply({
        "error": {
            "message": "Message describing the error",
            "type": "Access token has expired",
            "code": 190,
        }
    });
    const anExpiredToken = "anexpiredtoken"

    //Act
    const receivedLoginResponse = request('/login').post({
        token: anExpiredToken
    });


    //Assert
    expect(receivedLoginResponse.status).toBe(403);

})