test("When adding new order and user not exists, return http 404", async () => {
    //Arrange
    nock("http://localhost/user/")
        .get(`/1`)
        .replyWithError({'code': 'nonExisting'});
    const orderToAdd = {userId: 1, productId: 2};
    process.env.DB_TYPE = 'mongo-in-memory';

    //Act
    const orderAddResult = await request(expressApp)
        .post("/order")
        .send(orderToAdd);

    //Assert
    expect(orderAddResult).toMatchObject({
        status: 404,
        body: {
            status: 'declined'
        }
    });
})