it("When no product name, it throws error 400", async () => {
    let errorWeExceptFor = null;
    let errorCode;
    try {
        const result = await addNewProduct({
            name: 'nest'
        });
    } catch (error) {
        errorCode = error.code;
        errorWeExceptFor = error;
    }
    expect(errorWeExceptFor).not.to.be.null;
    expect(errorCode).to.Equal('InvalidInput');
});


