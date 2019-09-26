const aSlower = require('../b-faster');

describe('Fast tests´', () => {
    test('When some scenario, then expect something', async () => {
        //Arrange
        console.log('🐅 Fast test starts 🐅', new Date().getSeconds(), new Date().getMilliseconds())

        //Act
        const receivedValue = await aSlower.doSomething();

        //Assert
        expect(receivedValue).toMatch('result');
    });
})