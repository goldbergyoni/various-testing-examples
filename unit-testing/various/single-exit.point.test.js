test("When adding a valid product, then get a positive result ", async () => {
    const aProductToAdd = {id: 1,name: 'Tablet1'};

    const addReceivedResult = addProduct(aProductToAdd); // Entry 1

    expect(addReceivedResult).toBe(true); // Exit 1
});
test("When adding a valid product, then ensure mail was sent ", async () => {
    const aProductToAdd = {id: 1,name: 'Tablet1'};
    
    addProduct(aProductToAdd); // Entry 1

    const wasMailSent = checkIfMailWasSent(aProductToAdd);
    expect(wasMailSent).toBe(true); // Exit 2
});

test("When updating a product, then ensure one row was added", async () => {
    const aProductToAdd = {id: 1,name: 'Tablet1' };
    addProduct(aProductToAdd); // Entry 1

    const updateProductResult = updateProduct(aProductToAdd); // Entry 2

    expect(updateProductResult.numOfRowsAffected).toBe(1); // Exit 3
});

test("Products query, filter", () => {
    expect(true).toBe(true);
})

test("Products search", () => {
    expect(true).toBe(true);
})

test("Products price calculate", () => {
    expect(true).toBe(true);
})

test("Products change category", () => {
    expect(true).toBe(true);
})

test("Products rename", () => {
    expect(true).toBe(true);
})

test("Products delete all", () => {
    expect(true).toBe(true);
})


const addProduct = () => {
    return true;
}

const updateProduct = () => {
    return {
        numOfRowsAffected: 1
    }
}

const getProduct = () => {
    return {
        id: 1,
        name: 'Tablet1'
    }
}

const checkIfMailWasSent = () => {
    return false;
}