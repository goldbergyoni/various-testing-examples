const countriesList = require('countries-list')
const toBeType = require('jest-tobetype')
const sinon = require('sinon')
const TripClipService = require('../trip-clip-service')
const testHelper = require('./test-helper')
expect.extend(toBeType);
test('When no tips, photos and slogan, then it return all failure reasons', () => {
    const tripClipServiceUnderTest = new TripClipService();
    const clipInstructions = testHelper.factorClipInstructions();

    const receivedResult = tripClipServiceUnderTest.generateClip(clipInstructions);

    expect(receivedResult).not.toBeNull();
    expect(receivedResult.instructionsValidation).not.toBeNull();
    expect(receivedResult.instructionsValidation.failures).toBeType('array');
    expect(receivedResult.instructionsValidation.failures.length).toBeGreaterThan(0);
    let numberOfFailuresFound = 0;
    receivedResult.instructionsValidation.failures.forEach(failure => {
        if (failure === 'no-slogan' || failure === 'no-photos' || failure === 'no-tips') {
            numberOfFailuresFound++;
        }
    });

    expect(numberOfFailuresFound).toBe(3);

});