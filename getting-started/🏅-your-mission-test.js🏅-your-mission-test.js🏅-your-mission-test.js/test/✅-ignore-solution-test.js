// 🏅 Your mission is to create your first tests here 💜
// ✅ - Whenever you see this icon, there's a TASK for you
// 💡 - This is an ADVICE symbol, it will appear nearby most tasks and help you in fulfilling the tasks


const testHelper = require('./test-helpers')
const usersService = require('../users-service')
const jestExtended = require('jest-extended')


// ✅ TASK: Run this file tests, you should see at least see this simple test below 👇 pass
// 💡 TIP: This is how to achieve this:
// ⓵ Open your IDE terminal
// ⓶ Run the command 'npm run test:dev'
// ⓷ Within the terminal, type the letter 'p', this allows you to filter tests by he file name. Now type this file name and click 'Enter'

test('👶🏽 This is a playground test 🚂', () => {
    expect(true).toBe(true);
});

// ✅ TASK: Wrap this simple test above with a 'describe' statement
// 💡 TIP: Start typing 'describe' and your IDE should suggest auto-completion
// 💡 TIP: This the syntax of describe: describe('', () => {//test comes here});

// ✅ TASK: Add your first test 🎉. This test should not test real code, just choose a title and put one hard-coded assertion (expect)

// ✅ TASK: Test the 'validateUser' method of the 'usersService': Ensure that when no 'name' property is provided, 
//    the response 'succeeded' property is false. Remember the fail-first principle, ensure the test fail when appropriate
// 💡 TIP: Here's a valid user object to pass. Remove the property name from this object.
const user = {
    name: 'Kent',
    familyName: 'Beck',
    zipCode: '32486-01',
    address: 'Moonlight road 181, Alaska'
};

test('When no name is provided, the validation fails', () => {
    /// Arrange
    const userServiceUnderTest = new usersService();
    const userWithNoName = {
        name: undefined,
        familyName: 'Beck',
        zipCode: '32486-01',
        address: 'Moonlight road 181, Alaska'
    };

    // Act
    const receivedResponse = userServiceUnderTest.validateUser(userWithNoName);


    // Assert
    expect(receivedResponse.succeeded).toBe(false);
});

test('When all properties are valid, then the response should be positive', () => {
    const userServiceUnderTest = new usersService();
    const aValidUser = {
        name: "Joe",
        familyName: 'Beck',
        zipCode: '32486-01',
        address: 'Moonlight road 181, Alaska'
    };

    // Act
    const receivedResponse = userServiceUnderTest.validateUser(aValidUser);

    // Assert
    expect(receivedResponse.succeeded).toBe(true);
    expect(receivedResponse.reasons.length).toBe(0);
});

test('When multiple properties are missing, then the response should specify ALL of them', () => {
    const userServiceUnderTest = new usersService();
    const aValidUser = {
        name: undefined,
        familyName: 'Beck',
        zipCode: undefined,
        address: undefined
    };

    // Act
    const receivedResponse = userServiceUnderTest.validateUser(aValidUser);

    // Assert
    expect(receivedResponse.succeeded).toBe(false);
    expect(receivedResponse.reasons).toIncludeAllMembers(['no-location', 'no-name'])

});



// ✅ TASK: Use the AAA pattern in the test you just coded above ☝🏻
// 💡 TIP: Put 3 sections within the test (appear below). In each one of them, place the appropriate parts
// Arrange
// Act
// Assert

// ✅ TASK: Currently this file contains 3 test, run just one of of those and ignore all the others
// 💡 TIP: There are two options to achieve this, try both:
// ⓵ Add the word .skip to the target test. For example: test.skip("test name", () => {})
// ⓶ Preferred way: Use jest watch tools. Run the tests with 'npm run test:dev', now type the letter 't',
//   this allows you to filter tests by test name. Now type the desired test name and click 'Enter'

//🎖 CONGRATS. You are now familiar with the basics of testing. 'A journey of a thousand miles begins with a single step' 🤗

// ✅ TASK: Create another test against the 'validateUser' method of the 'usersService':
//    Provide all the mandatory field and ensure that the response is satisfactory (as expected)
// 💡 TIP: The response contains two relevant fields to check upon, check both

// ✅ TASK: Create another test against the 'validateUser' method of the 'usersService':
//    Don't pass at least two mandatory properties, and ensure that the response.succeeded is false
//    but also that the 'reasons' array has all the right reasons inside
// 💡 TIP: The npm package jest-extended' has a nice assertion method, '.toIncludeAllMembers([members])', that might help here: 
//    https://github.com/jest-community/jest-extended#toincludeallmembersmembers

// ✅ TASK: Create another test against the 'validateUser' method of the 'usersService':
//    Don't pass anything to the function and ensure it throws back an exception
// 💡 TIP: The expect assertion expect(someMethod).toThrow can be helpful:
//    https://jestjs.io/docs/en/expect#tothrowerror

// ✅ TASK: Create another test against the 'validateUser' method of the 'usersService':
//    Don't pass anything to the function and ensure it throws back an exception
// 💡 TIP: The expect assertion expect(someMethod).toThrow can be helpful:
//    https://jestjs.io/docs/en/expect#tothrowerror

// ✅ TASK: Create the first test against the 'addUser' method of the 'usersService':
//    Pass a valid input and expect a positive response back
// 💡 TIP: The code under test is an async method, your test must await for a response

test('When adding a new user, then get back a positive result', async () => {
    /// Arrange
    const userToAdd = {
        name: 'Kent',
        familyName: 'Beck',
        zipCode: '32486-01',
        address: 'Moonlight road 181, Alaska'
    };
    const userServiceUnderTest = new usersService();


    // Act
    const receivedResponse = await userServiceUnderTest.addNewUser(userToAdd);

    // Assert
    expect(receivedResponse).toBe(true)
});

// ✅ TASK: Create the first test against the 'deleteUser' method of the 'usersService':
//    ensure than a user is deleted the response is positive
// 💡 TIP: This method returns a callback, hence the test must accept a 'done' function as a param and then
//    it should call done() right after the assertion line
//    Code example: test('title', (done) => {done()});

test('When an existing user is deleted, then we get a successful response', async (done) => {
    /// Arrange
    const userServiceUnderTest = new usersService();
    const aValidUser = {
        name: 'kent',
        familyName: 'Beck',
        zipCode: "01010"
    };
    await userServiceUnderTest.addNewUser(aValidUser);

    // Act
    userServiceUnderTest.deleteUser('Kent', (error, response) => {
        // Assert
        expect(response.succeed).toBe(true);
        done();
    })

});


//🎖 CONGRATS. You have internalized the anatomy of software testing. This knowledge can be replicated to write many type
//of tests including advanced frontend and backend testing 
//🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
//💜💜💜💜💜💜💜💜💜💜💜
//🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
//💜💜💜💜💜💜💜💜💜💜💜
//🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀