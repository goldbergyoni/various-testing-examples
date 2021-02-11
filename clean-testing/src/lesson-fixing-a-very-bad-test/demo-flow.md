# Clean testing demo

## Intro - slides

5 golden principles, How it often looks, how it should look like, micro-contribution, the defining moment

## The unit under test

- What is it about
- It's not perfect intentionally
- Problem: A test fails (remember the story of failure (slides)?), I'm about to deploy, what is it about? now have to read the code 📹
- Overview of the test, can you spot a bug? ❓
- How many lines are going to be removed survey? ❓

## Test structure patterns

### Naming

- Bad name - don't know what's wrong
- Guideline: What makes a good test name?
- A - Standard, repeating template, our mind is good with patterns
- B - Understood to most people, also the new developer, the one who don't remember. What is the common denominator? show requirement document 🖼
- Advice: USE acronym, include 3 parts, from Osherove book 📓
- First try: code 3 parts in one line

### Hirearchy

- Problem: Show report, Long textual list, any relation between the failing test? report looks bad 🖼
- Making this better: Show organized report 🖼, can run only one category 🆒
- Advice: this is a great opportunity, test reports are better than .readme
- Applying categorization: Group by common
- Method 1: Group by scenario, great when there are few scenarios and many tests, like, the source of "it", Mocha context #todo
- Method 2: Group by custom category, create describe, put tests
- Tagging: sometime we want to run custom #smoke
- Linter: ⚙️
- Here's a list with useful linters 🎁
- BP: Show last BPs ✅

### The test parts

- Problem: Bulk of test, have to read all to conclude what is the SUT
- Reminder: Our brains stay on system1 when recognize patterns (pattern), zero cpu cycles
- BP: AAA ✅
- Alternative: given-this-should #todo
- Do it: move to AAA
- My test snippet ⚙️🆒

## Test assertion patterns

### Declarative assertions

- Now that I understand what is this about, I can refactor
- Problem: Additional imperative code, buggy, test the tests, unclear results
- Anti-example: how errors look now
- Better-example: now the error is clearer
- Replace with declarative
- Take it further: Cocumber, custom message 🚀 (Advanced)

### Try-catch pattern

- Gist: Declarative

### Unnecessary assertions

- Overlapping - eager, paid for code
- Mocks - Violation of black-box, how to ensure? with public
- Nitty-gritty
- Pre-condition assertions #todo
- Problem: Many assertions, ongoing discussion - how many is allowed, 1? more?
- BP: minimize assertions ✅

### No IF + no multiple doors

- Problem: I see here code, something to dive into, something to test?
- Recommendation: Flat, no loops, no if, simple set of instructions
- Linter ⚙️
- Why we don't need it: If you did, you're probably doing something wrong
- Literature: Entry point & exit point 📓
- BP: minimize assertions
- Remove from code

## Test setup patterns

### The multi-galaxy (global) problem

- Intro: Next improvement is about a line that doesnt exist in the test, which? ❓
- Intro2: Long constructor, reasonable? so wrong
- Problem: Globals means side affect, show how they step on each toes
- Bigger problem: 7 loc test? simple, 50 tests stepping on each other toes? complex
- Example: one test change to other, .skip()
- Fix: move tp helper
- Core principle: Tests must be independent, tiny universe
- BP: The tiny universe ✅

### The mystery visitor problem & magic number

- Problem: Can't correlate result with cause
- The magic number
- Literature: The mystery visitor 📓
- Challenge: Repetition is not maintainable (show JSON)
- Core principle: balance TRDY & explicit, put the minimal to make it clear
- Pattern: The explicit factory
- The win: call the factory, make it clear
- Show all open BP ✅

### The expensive setup problem (DB)

- Problem: What if setup is expensive
- Literature: The fresh fixture 📓

### Parameterized test

- Problem: Same test, small change
- Apply: test.each
- Spice-up: Take data from DB, nasty-strings, fuzz or even production 🚀
- Literature: Data-driven 📓
- Show all open BP ✅

### The clean-up program

- Gist: Sinon sandbox

### Advanced ideas

- Sinon sandbox, DB initialize, stay within the test

### Summary - view by view ✨

- Same value, different price - both will find the same bugs
- Multiply this by hundred of tests
- Gist: At a rainy day, which one would you maintain?

---

---
