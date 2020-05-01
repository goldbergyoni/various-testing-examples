#Legend of emojis:‍
WIFM = 🤑, ✅ = Best practice, 🚀 = Advanced, ‍👯‍ = Analogy, 🖼‍ = Cool visual, 📓 = Literature, 😂 = Joke

# The fundamental of writing tests

## Preparing my computer

- Install jest
- Jest config examples: files, show notification
- Configure package-json, start watch mode
- Create file, nothing runs

## The suite structure

- Describe - is used for categorization and reporting, like folder 👯‍
- Our first test - name & body, when on sale - 10%
- Make it fail ✅
- The value of describe - bad and good report 🖼

## AAA

- Intent - show 3 parts without AAA
- AAA Formalized
- Arrange - Objects, add records, UI, test doubles
- Anti-pattern: unstructured code
- AAA BP ✅
- Repeating idea: Declarative

## Assertions

- Intro - Show get products method with test
- Motivation - This assertion will go complex, loops - bugs? we might write test for tests 😂
- Better - Simple, declarative, HTML ‍‍‍👯‍
- Do it - write expect toContain
- Value1 - Shorter
- Value2 - Better error 🖼‍
- Exception example
- Show a list of assertions from document 🖼‍
  https://jestjs.io/docs/en/expect
  https://github.com/jest-community/jest-extended
- Show custom ‍🚀

## Test types

- Examples: API test, frontend test
- What should we test?
- E2E tests - big puzzle 🖼‍
- Unit test - isolated
- Integration - happy-medium
- Two pyramids

# Setup & teardown

- Intro: need to prepare and properly close stuff, like DB, server mockg

* Rundown with console.log 🖼
* Beforeall - Initialize DB (or mock server)
* Beforeach - Process.env
* Aftereach - Process.env
* Afterall - Teardown
* The risk - globals
* BP: Each test is a tiny universe ✅

# Setup & teardown

- Intro: need to prepare and properly close stuff, like DB, server mock
