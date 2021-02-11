// 🏅 Your mission is to create perfect tests here 💜
// ✅ - Whenever you see this icon, there's a TASK for you
// 💡 - This is an ADVICE you might see at certain points

const toBeType = require('jest-tobetype')
const sinon = require('sinon')
const jestExtended = require('jest-extended')

const {
    TripClipService,
    MailSender,
    VideoProducer,
    WeatherProvider
} = require('../trip-clip-service')
const testHelper = require('./test-helpers')
expect.extend(toBeType);


// ✅ TASK: Fix this test below, it can get much better!
// 💡 TIP: Use the golden principles that we've learned about, ~70% of the test lines of code can be removed
test('When no tips, photos and slogan, then it return all failure reasons', async () => {
    const tripClipServiceUnderTest = new TripClipService(new VideoProducer(), new WeatherProvider(), new MailSender());
    const clipInstructions = testHelper.factorClipInstructions({});

    //Check that mail was sent and the internal validation function was called
    // 💡 TIP: The Single Door principle suggests that only one outcome should be tested
    // 💡 TIP: The Black-box principle suggests that no implementation/private functionality should get tested
    const mailerSpy = sinon.stub(MailSender.prototype, "send").returns({});
    const validationMock = sinon.spy(tripClipServiceUnderTest, "validateInstructions");

    // 💡 TIP: When deleting lines, remind to yourself which golden principle is violated
    const receivedResult = await tripClipServiceUnderTest.generateClip(clipInstructions);
    expect(receivedResult).not.toBeNull();
    expect(receivedResult.instructionsValidation).not.toBeNull();
    expect(receivedResult.instructionsValidation.failures).toBeType('array');
    expect(receivedResult.instructionsValidation.failures.length).toBeGreaterThan(0);
    let numberOfFailuresFound = 0;

    // 💡 TIP: The next code tests that all failure messages appear in the result
    // 💡 TIP: jest-extended is already imported to this file and can help with shortening the next part (see array helpers)
    // https://www.npmjs.com/package/jest-extended
    receivedResult.instructionsValidation.failures.forEach(failure => {
        if (failure === 'no-slogan' || failure === 'no-photos' || failure === 'no-tips') {
            numberOfFailuresFound++;
        }
    });
    expect(numberOfFailuresFound).toBe(3);
    expect(mailerSpy.called).toBe(false);
    expect(validationMock.calledWithExactly(clipInstructions)).toBe(true);

    // Let's also check now that the method 'generateVideoScript' also works with this instructions
    const scriptGenerationResult = tripClipServiceUnderTest.generateVideoScript(clipInstructions);
    expect(scriptGenerationResult.succeeded).toBe(true);
});

// ✅ TASK: Write a happy path test here, create a successful video
// 💡 TIP: Choose a single exit point for your test: check the function response
test('Choose a good name', async () => {
    const tripClipServiceUnderTest = new TripClipService(new VideoProducer(), new WeatherProvider(), new MailSender());
    const validVideoInstructions = testHelper.factorClipInstructions()

    const receivedVideoResult = await tripClipServiceUnderTest.generateClip(validVideoInstructions);

    // 💡 TIP: Create the AAA structure first
    // 💡 TIP: When calling testHelper.factorClipInstructions(), explicitly specify important values to avoid the 'mystery visitor'

    // 💡 TIP: Stub the calls to slow 3rd parties like video & weather services

    // 💡 TIP: Check multiple properties of the response
});

// ✅ TASK: Write a test that checks that if no instructions are provided (null), 
//the function 'generateClip' returns an exception
// 💡 TIP: Ensure to also check the exception type!
// 💡 TIP: Your test shouldn't get more than 4 lines long

// ✅ TASK: Write a test to ensure a video can be created with every background. The list of background lists
//can be found in test-helpers.getVideoBackgrounds
// 💡 TIP: Although we have 5 different backgrounds, try to write the test only once
test.each(testHelper.getVideoBackgrounds())('Test description, include the background name here', async (background) => {
    // 💡 TIP: Although we have 5 different backgrounds, try to write the test only once
    // 💡 TIP: Ensure that when the test fails, the background name appears in the failure message
});

// ✅ TASK: Check your coverage reports, which parts are not-covered? improve that
// ✅ TASK: Ensure that your tests have no testing linting issues