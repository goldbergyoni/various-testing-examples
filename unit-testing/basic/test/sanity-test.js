const fs = require('fs')

describe('Sanity check', () => {
    test('Exists just to ensure that the testing harness is alive and kicking', () => {
        fs.exists('./boo', () => {

        })
        expect(true).toBe(true);
    });
});