// 👿 Few words from your product manager, we want to test get-price-offer.js file:
// When product doesnt exist -> the unit under test must throw an exception
// When the customer is a premium -> 10% discount should be applied
// In any valid case -> Send the user an email with the price
// Should you identify other implicit requirements - please test those

//💰 Few words from your CFO, we will reward you (Bonus!) if you will:
//1. Test that the method 'GetUserPriceByClass' always returns records for 'Premium' and 'Standard'
//2. Test that metrics is indeed fired when a new price offer is sent

// 🧚‍ Few words from your architect: remember that this is a unit test, don't approach
//the DB or the mail provider (we pay for every sent email!)

test.todo('Test it 👆🏽');

const sinon = require('sinon')
const GetPriceOffer = require('../get-price-offer')
const emailProvider = require('../email-provider')
const dataAccess = require('../data-access')

let sinonSandbox;

beforeAll(() => {
    sinonSandbox = sinon.sandbox.create();
});

afterEach(() => {
    sinonSandbox.restore()
});

test("When something , then expect something", async () => {
    //Arrange

    //Act
    const responseToTest = {};

    //Assert
    expect(true).toBe(true);
});
