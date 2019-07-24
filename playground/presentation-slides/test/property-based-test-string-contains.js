const {
    check,
    gen,
    property
} = require('testcheck');

String.prototype.includesV2 = (searchString) => {
    //blazing fast implementation
}

describe.skip('PBT', () => {
    check.test('Given any string.includes input, expect a correct result',
        gen.string, gen.string,
        (mainString, searchString) => {
            const receivedResult = mainString.includesV2(searchString);
            expect(receivedResult).toBe(mainString.includes(searchString));
        });
});