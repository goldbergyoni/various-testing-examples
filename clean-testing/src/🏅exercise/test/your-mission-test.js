// 🏅 Your mission is to create perfect tests here 💜
// ✅ - Whenever you see this icon, there's a TASK for you
// 💡 - This is an ADVICE you might see at certain points

const countriesList = require('countries-list')
const toBeType = require('jest-tobetype')
const sinon = require('sinon')
const {
    TripClipService,
    MailSender,
    VideoProducer,
    WeatherProvider
} = require('../trip-clip-service')
const testHelper = require('./test-helpers')
expect.extend(toBeType);


// ✅ TASK: Fix this test below, it can get much better!
// 💡 TIP: Use the golden principles that we learned, ~70% of the lines can be removed
test('When no tips, photos and slogan, then it return all failure reasons', async () => {
    const tripClipServiceUnderTest = new TripClipService(new VideoProducer(), new WeatherProvider(), new MailSender());
    const clipInstructions = testHelper.factorClipInstructions({});
    //put magic number here
    const mailerSpy = sinon.stub(MailSender.prototype, "send").returns({});
    const validationMock = sinon.spy(tripClipServiceUnderTest, "validateInstructions");
    const receivedResult = await tripClipServiceUnderTest.generateClip(clipInstructions);
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
    expect(mailerSpy.called).toBe(false);
    expect(validationMock.calledWithExactly(clipInstructions)).toBe(true);

    //put additional call here
});

// ✅ TASK: Write a happy path test here, create a successful video
// 💡 TIP: Choose a single exit point for your test
test('Choose a good name', () => {
    const tripClipServiceUnderTest = new TripClipService(new VideoProducer(), new WeatherProvider(), new MailSender());
    const a = testHelper.factorClipInstructions({
        slogan: "It was amazing",
        photos: ["a.jpg"],
        tips: ["Visit the Italian restaurant"]
    })

    const r = tripClipServiceUnderTest.generateClip(a);

    // 💡 TIP: Create the AAA structure first
    // 💡 TIP: When calling testHelper.factorClipInstructions(), explicitly specify important values to avoid the 'mystery visitor'

    // 💡 TIP: Stub the calls to slow 3rd parties like video & 

});