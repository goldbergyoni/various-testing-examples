test.only("When no product name, it throws error 400", async () => {
    expect(addNewProduct).to.eventually.throw(AppError).with.property('code', "InvalidInput");
});

test('When no product name, it throws error 400', async () => {
    addNewProduct({
        name: 'iPhone'
    });
});