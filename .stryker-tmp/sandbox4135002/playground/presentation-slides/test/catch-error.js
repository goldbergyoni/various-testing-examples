it("When no product name, it throws error 400", async () => {
    let errorWeExceptFor = null;
    try {
        const result = await addNewProduct({
            name: 'nest'
        });
    } catch (error) {
        expect(error.code).to.equal('InvalidInput');
        errorWeExceptFor = error;
    }
    expect(errorWeExceptFor).not.to.be.null;
    //if this assertion fails, the tests results/reports will only show
    //that some value is null, there won't be a word about a missing Exception
});


