// 👿 Few words from your product manager, we want to test get-price-offer.js file:
// When no product is provided -> the unit under test must throw an exception
// When the customer is a premium -> 10% discount should be applied
// In any case -> Send the user an email with the price
// Should you identify other implicit requirements - please test those

//💰 Few words from your CFO: we will reward you (Bonus!) if you will:
//1. Test that the method 'GetUserPriceByClass' always returns records for 'Premium' and 'Standard'
//2. Test that metrics is indeed fired when a new price offer is sent

// 🧚‍ Few words from your architect: remember that this is a unit test, don't approach
//the DB or the mail provider (we pay for every sent email!)

const sinon = require('sinon')
const GetPriceOffer = require('../get-price-offer')
const emailProvider = require('../email-provider')
const dataAccess = require('../data-access')

test.todo('Test it 👆🏽');

describe.skip('Get price offer #test-doubles', () => {
    let sinonSandbox;

    beforeAll(() => {
        sinonSandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sinonSandbox.restore()
    });

    describe.skip('Submit and receive', () => {
        test("When no product is specified, then throw an exception", async () => {
            //Arrange
            const getPriceOfferUnderTest = new GetPriceOffer();
            sinonSandbox.stub(dataAccess, "getProduct")
                .returns(undefined);

            //Act
            const submitAndRecieveMethod = getPriceOfferUnderTest.submitAndReceive.bind(this, 1, {
                email: 'me@goldbergyoni.com',
                class: "premium"
            });

            //Assert
            expect(submitAndRecieveMethod).toThrow();
        })

        test("When submitting a valid price offer ,then sent an email with the right price", async () => {
            //Arrange
            const spyOnMails = sinonSandbox.spy(emailProvider, "sendEmail");
            const productStub = sinonSandbox.stub(dataAccess, "getProduct")
                .returns({
                    name: 'iPhone',
                    price: 100
                });
            const getPriceOfferUnderTest = new GetPriceOffer(dataAccess, emailProvider);

            //Act
            getPriceOfferUnderTest.submitAndReceive('iPhone', {
                email: "me@goldbergyoni.com",
                class: "premium"
            });

            //Assert
            expect(spyOnMails.withArgs("me@goldbergyoni.com", sinon.match.any, sinon.match.any).called).toBe(true);
        })
    });
});