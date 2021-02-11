#Legend of emojis:‍
WIFM = 🤑, ✅ = Best practice, 🚀 = Advanced, ‍👯‍ = Analogy, 🖼‍ = Cool visual, 📓 = Literature, 😂 = Joke, 💡 = Insight, Term = 📌

# The fundamental of writing tests

## My first pseudo test

- Goal: See a test and its purest form, no frameworks
- The UAT - Online shop
- Explain test code - Let's test. Test means we invoke the price calculate method and check whether it works as expected
- Scenarios with comments - Let's check two things, when onSale
- Require, first case is no discounts, text is for clear output
- Yay, it pass - Run 🖼
- Add more tests, run
- Here comes the punch 🤑
- Refactor - Can you tell if it works now? In real-world, it will be 30 lines 🖼
- The value - Now I can run my tests and get feedback instantly, automatically 💡
- More value - Spent time and wrote more code, is it just for getting instant feedback? Oh no, there's much more to it. The next lesson is about 5 important advantages that testing can bring to your workflow, only those who understand these advantages - can achieve them, I'll see you there 🤑

## Test runners

- //Slides with test runner explanation//
- Preparing my computer - choose your IDE, all you need is a terminal/command
- Install jest or Mocha, also the types (even if not using JS 💡)
- jest init. The default is good enough
- npm t, show results 🖼
- Configure package-json
- This all you need to start, here are some tweaks
- Config examples: Files, Notification, maxCPU, 💡 in local run with maxCPU=0
- Watch-extension - Type ahead + Robot 🖼, since master, directories filter
- Awesome-jest site
- Next - Having all installed, we're ready to create our first real-world test

## The suite structure

- Previous: We installed..., Ready to create our first real world test?
- A brief of the unit-under-test. Explain SUT 📌
- Intent - Open a test file, explain in comments - check that when on sale 🖥
- The test function - Let's create a test by calling the test function, 2 params, explain first, then fill 🖥, show in Mocha 'it' 🖥
- The title - name & body, when on sale - 10%
- Implement - Stop on isOnSale=true,
- See it pass - Run not watch mode, && watch mode
- Make it fail - Is my work on this test done? partially, because we always need to see the test fails at least once. The goal of a test, it to show that when there is a bug, it will get caught. If we never saw this, how can we be sure? In fact, a test by default pass even it it's empty, see here... It means that even if there is a bug the test will report that everything is great. Let's go to the CalculatePrice method, create a bug - change the discount ✅
- Introduce describe - It's recommended to wrap tests with describe blocks which as their name imply they describe the tests category, kind of folders for tests ‍‍ 👯‍
- Why they needed, bad report - Without them a test report is not really convenient, with time you'll write more tests and the report will look like 🖼
  -- Good report - This is the same tests 🖼
- Second test: both isPremium & onSale
- Happy path 📌: We should go on and test more scenarios. Called so because the flow is part of normal app state, nothing wrong happened, there is no reason for the user to be unhappy
- Corner cases: Test also that app behaves fine when bad things happen like invalid input. Called corner cases 📌. We will test this soon once we learn how to deal with exceptions in testing
- Next: This was a simple test, in the next lesson will we spice things up and write a bit more complicated tests

## AAA

- Previous & context - By now a very simple test, as it grows complexity might also grow. I wanna show some patterns for keeping the code extremely simple. This is strategic because tests are meant to help us maintaining the production code, if they become additional source of pain we missed the entire reason for doing testing. For this reason, tests should be kept extremely simple, something you look at and it feels no brainer, almost like HTML
- Get products test, show UT - The add product method with the schema, the get by category method which is async
- Code the test, explain the assert will get better
- I'm concerned - This starts growing big and complex. There will be tests that are even more challenging. The first issue I want to tame is structure - when a reader looks on a test it shouldn't feel like a long code to skim through, should feel structured like HTML
- The conceptual 3 phases - Modal
- Arrange - Preparing stuff, or bringing the system to the state it should be before the test. Objects, add records, UI, test doubles
- Act - Trigering an action, make the system do something that you want to test. Do something to our system, one function or UI walk-through
- Assert - Check your expectations were met, Something should change
- Recap - Look at it, put aside the small details, internalize the core logic of it - prepare stuff, run the thing that you want to test, ensure the outcome is satisfactory, makes sense?
- Code - AAA Formalized
- Side by side: See structured code vs unstructured code 🖼
- Repeating idea: Declarative, no surprises, as HTML 💡✅
- Next: The assertion code is too big and feels like real-code, let's simplify it

## Assertions basics

- Intro - In the previous lesson we wrote this test structured it becuase we want to keep the tests simple and declarative. In this lesson, we will improve this part - the assertion
- Problem1 - When we look at it, it's quite long and complex, at least much complex than tests should be. It also contains a loop and we wish to avoid such things in testing like IF/ELS... Otherwise, if we will have imperative code - bugs? we might write test for tests 😂
- Better - Simple, declarative, HTML ‍‍‍👯‍
- Assertion library - For this reason, we use assertion library that express these expectations in a declarative and simpler way, let's see an example with Jest
- Assertion explanation - Let's see an example over a new file and will get back to this one soon, I prepared here the simplest test on earth, @introduce-the-test, how do we check that it returns the right string and if not make the code fail? Assertion library, Jest has built-in one, and the syntax looks like this, @expect-code - expect(received) to be something? what are our expectation, it can be a number, greater than value or specific value, in our case it toBe(). Let's see the test pass and fails - . Note that it has two parts: This is what we received back from the code under test, the reality. This is our expectation.
- Do it with Jest - With Jest we use the expect method
- We pass the value that we got from the unit under test, in our case it's an array of books
- A convenient methods to check whether this array satisfies our expectations
- In this method, we want to ensure that the array contains these two books
- So we use...
- Look at it! it's so simpler 💡
- Value1 - Shorter
- Value2 - Better error 🖼‍
- Useful assertions with code - These are called matchers. toBe for scalars, toBeGreaterThan, toEqual for objects, toMatchObject for partial match when have dynamic value, For truthy things: toBeNull, toBeTruthy, toContain,
- Negative assertion - Show '.not'
- Received and expectation pattern
- Show a list of assertions from document 🖼‍
  https://jestjs.io/docs/en/expect
  https://github.com/jest-community/jest-extended
- Closing - We just covered basics of asserting, checking the responses that we get, but what if there is no response rather an exception? In the next lesson, will discuss asserting on errors or in other words

## Errors and custom assertions

- Context - We've seen how to check returned values, let's see how to check that the right exceptions are being thrown when they should
- Exception example - The products service add method #visual
- Why it's important - Although this is not a feature, it's a functionality that is neccessary to test. If an error won't be thrown or not from the right type - There might be consequences to this. For example, your error handler might...or your monitoring system won't get enough information to understand production bugs
- Research - In fact, researches show that incorrect error flow form a big portion of serious production issues ‍💡. Remember: Testing that the right errors are thrown and are handled correctly is one of the most significant tests to write
- Definition - This type of testing is often called corner or edge cases 📌
- Create test #visual -
- Naive - Many projects test this naively by doing try-catch. It works but in tests we always look for short and declarative methods
- The Expect interface challenge - The jest.toThrow interface, it won't work if we call the func, what if we need params, there are two simple solution
- The Jest way 1 - create a wrapper, this function will call the real one with the right params
- The Jest way 2 - Show with bind, bind create a copy of the function with the params
- The right expectation - Our assertion is not good enough yet. We only check that some error, it's critical to check that the right error was thrown, this dependes on how you tag errors. If you use the message property, then just. If you rely on the type, pass here. What if your error use custom property like Node.js, show code 🚀, this case we will use a lesser known assertion,
- Summary - In any case, it's shorter and declarative
- Don't catch error, expect them ✅
- Recap multiple BPs ✅
- Next: We've covered the fundamentals of assertions, there are more to learn like custom assertions and schema

## Callback tests #optional

- Context - By now we tested functions that returns a plain value back, in JS land we also have to deal with callbacks & promises. This is optional
- Promises - Let's start with promises, in fact we already did that - Remember that function... All we have to do is...
- SUT - What about callbacks? To practice this, let's test this callback function, show delete line by line
- Code a naive test - Code it...It pass
- Make it fail, but... - Does it really work? A good example of why we need to make tests fail first, let's delete all lines
- What happened - To understand what's going on, let's run this in debug mode, see it exits before even getting the callback so no matter what it will pass
- Insight - It's not related to Jest, see function A that calls B with callback, Jest is like function A
- Solution - if you know that the result will come at a later time, add a param to your test function

## Coffee break ☕️

# Setup & teardown

- [Galaxy view] The ideal mode -  By now, all of the tests we ran are standalone with zero things happening outside the test. For the reader, this is perfect. she can understand the entire test without any navigation, everything is packed into these 7 lines. This makes the test extremely easy to maintain, strive to keep it this way
Challenge - Sometimes we just need to run stuff outside our tests like when need to setup expensive resources. Consider as an example that your tests works against a webserver API, if each one will open its own webserver it's going to be so slow (webserver balloons)
- Intro to hooks - For this reason, every test runner has setup and teardown hooks that allows to run custom code before and after tests
- BeforeAll example - Quick example, tests and beforeAll, in Mocha the name is before
- Go over them all - There are more methods, let's go over them all and understand why & when
- beforeAll - Before all, per file, only once mostly due to performance, 
- beforeEach - per file, anything that needed to run before every test, mostly useful for cleanup - if tests can alter the state, change something global that affects all the tests, this is a good place to reset
- afterEach - Most of the time beforeEach is enough, if need to verify clean-up after the last test
- AfterAll - After all is the counter hook, everything that was setup in beforeAll should be cleaned-up in 
- Limitations of file-scoped hooks - One thing is still missing, note that all the hooks here happen per file, dozens of file means that beforeAll will run dozens of times, this is not efficient for resource intensive operations that should happen only once like instantiating a DB, if you have 20 test files..., 
- Global hooks - 
- Full example problem context - Global config file with discount amount + allowDiscount, code now mind the discount
- Full example problem - test1 mutates allowDiscount, test 2 fails, they are slow
- The risk - Coupling via globals, show shared service, complexity is rising when coupled, not longer just 7 lines of code
- BP: Each test is a tiny universe ✅
- What's wrong with beforeAll - Per file, wasteful for opening precious resources
- Global before all - DB
- Recap: all hooks image 🖼
