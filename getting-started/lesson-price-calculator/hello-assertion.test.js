const helloMethodUnderTest = () => {
    return 'hello-test';
}

test('When hell test method, then get back hello-test', () => {
    const receivedResponse = helloMethodUnderTest();

    expect(receivedResponse).toBe('hello-test');
});

