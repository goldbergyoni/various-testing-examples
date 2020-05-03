// 🏅 Your mission is to create your first tests here 💜
// ✅ - Whenever you see this icon, there's a TASK for you
// 💡 - This is an ADVICE symbol, it will appear nearby most tasks and help you in fulfilling the tasks

//Exercise:  corner cases,assert with exception,
//assert with array, beforeEach - config things


const testHelper = require('./test-helpers')
const usersService = require('../users-service')


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