const aSlower = require('../a-slower');

describe('Slow tests', () => {
    test('When some scenario, then expect something', async () => {
        //Arrange
        console.log('🐢 Slow test starts 🐢', new Date().getSeconds(), new Date().getMilliseconds());

        //Act
        const receivedValue = await aSlower.doSomething();

        //Assert
        expect(receivedValue).toMatch('result');
    });
})