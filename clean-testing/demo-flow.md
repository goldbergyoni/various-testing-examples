# Clean testing demo

## Intro - slides

How it often looks, how it should look like, micro-contribution, the defining moment,

## The unit under test

- What is it about
- It's not perfect intentionally

## Test structure patterns

### Naming

- Problem: A test fails, I'm about to deploy, what is it about? now have to read the code 📹
- Guideline: Speak the language that most people understand, so the visitor developer speak at the requirement level, show requirement document 🖼
- Advice: include 3 parts, from Osherove book 📓
- First try: code 3 parts in one line
- Linter: eslint-plugin-test-names ️️⚙️

### Hirearchy

- Problem: Long textual list, any relation between the failing test? report looks bad 🖼
- Making this better: organized report 🖼, can run only one category 🆒
- Applying categorization: Group by common
- Method 1: Group by scenario, great when there are few scenarios and many tests, like, the source of "it", Mocha context
- Method 2: Group by custom category, create describe, put tests
- Tagging: sometime we want to run custom #smoke
- Linter: ⚙️
- Here's a list with useful linters 🎁
- BP: Show last BPs ✅

### The test parts

- Problem: Bulk of test, why is the SUT?
- Literature: GOOS about structure 📓
- Explain: Our brains stay on system1 when recognize patterns (pattern), zero cpu cycles
- BP: AAA ✅
- Do it: move to AAA
- My test snippet ⚙️

## Test assertion patterns

### Declarative assertions

- Problem: Additional imperative code, buggy, test the tests, unclear results
- Anti-example: how errors look now
- Better-example: now the error is clearer
- Take it further: Cocumber, custom message
- BP: The last one ✅

### Try-catch pattern

- Gist: Declarative

### No IF

- Problem: I see here code, something to dive into, something to test?
- Recommendation: Flat, no loops, no if, simple set of instructions
- Linter ⚙️
- Why we don't need it: If you did, you're probably doing something wrong
- Literature: Entry point & exit point 📓
- BP: minimize assertions
- Remove from code

### Other assertions to remove

- Mocks - code shadow joke
- Overlapping assertions
- Problem: Many assertions, ongoing discussion - how many is allowed
- Simple principle: Always less, remove the redundant, remove the nitty gritty, remove pre-conditions
- Tough decision: how many assertions, what happens if too many
- Show all open BP ✅

## Test setup patterns

### The multi-galaxy (global) problem

- Problem: Globals means side affect
- Example: one test change to other, .skip()
- Core principle: Repeat yourself whenever reasonable
- Pattern: The single helper
- BP: The tiny universe ✅

### The expensive setup problem (DB)

- Problem: What if setup is expensive
- Literature: The fresh fixture 📓

### The mystery visitor problem & magic number

- Problem: Can't correlate result with cause
- The magic number
- Literature: The mystery visitor 📓
- Challenge: Repetition is not maintainable (show JSON)
- Core principle: balance TRDY & explicit, put the minimal to make it clear
- Pattern: The explicit factory
- The win: call the factory, make it clear
- Show all open BP ✅

### Parameterized test

- Problem: Same test, small change
- Literature: Data-driven **📓**
- Show all open BP ✅

### The clean-up program

- Gist: Sinon sandbox

### The code shadow

- Gist: When not to use
****