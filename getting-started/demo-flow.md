#Legend of emojis:‍
WIFM = 🤑, ✅ = Best practice, 🚀 = Advanced, ‍👯‍ = Analogy, 🖼‍ = Cool visual, 📓 = Literature

# The fundamental of writing tests

## Preparing my computer

- Install jest
- Jest config examples: files, show notification
- Configure package-json, start watch mode
- Create file, nothing runs

## The suite structure

- Describe - is used for categorization and reporting, like folder 👯‍
- Test - name & body
- The value of describe - bad and good report 🖼

## The test structure

- Constitues 3 parts
- Arrange - Prepare input
- Act
- Assert - Throw error (for now)
- Outcome - watch mode, make it fail first ✅

## AAA

- AAA Formalized code
- Anti-pattern: long test code
- AAA BP ✅
- Repeating idea: Declarative

## Assertions

- Intro - We don't throw exception, rather use special language
- Exemplify challenge - demonstrate test with array, find2
- Better - write expect, fix previous
- Smart expect - shows what's missing 🖼‍
- Exception example
- Show a list of assertions from document 🖼‍
  https://jestjs.io/docs/en/expect
  https://github.com/jest-community/jest-extended

## Test types

- Examples: API test, frontend test
- What should we test?
- E2E tests - big puzzle 🖼‍
- Unit test - isolated
- Integration - happy-medium
- Two pyramids

# Setup & teardown

- Intro: need to prepare and properly close stuff, like DB, server mock
- Rundown with console.log 🖼
- Beforeall - Initialize DB (or mock server)
- Beforeach - Process.env
- Aftereach - Process.env
- Afterall - Teardown
- The risk - globals
- BP: Each test is a tiny universe ✅

# Setup & teardown

- Intro: need to prepare and properly close stuff, like DB, server mock
