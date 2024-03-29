const aSlower = require('../a-slower');

describe.skip('Slow tests 3', () => {

    test('When some scenario, then expect something', async () => {
        //Arrange
        console.log('🐢 Slow test starts 🐢', new Date().getSeconds(), new Date().getMilliseconds())

        //Act
        const receivedValue = await aSlower.doSomething();

        //Assert
        expect(receivedValue).toMatchObject(['banana', 'apple', 'mango']);
    });
})