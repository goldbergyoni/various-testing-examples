# Clean testing demo

## Intro - slides

How it often looks, how it should look like, micro-contribution, the defining moment,

## The unit under test

- What is it about
- It's not perfect intentionally

## Test structure patterns

### Naming

- Problem: A test fails, I'm about to deploy, what is it about? now have to read the code 📹
- Guideline: Write for the visitor, speak at the requirement level, show requirement document 🖼
- Requirements structure: topic, when, then...
- Advice: include 3 parts, from Osherove book 📓
- BP: 3 parts in each test name ✅
- First try: code 3 parts in one line, report looks bad 🖼
- Linter: eslint-plugin-test-names ️️⚙️
a

### Hirearchy

- Problem: Long textual list, any relation between the failing test?
- Applying categorization: Group by common
- Method 1: Group by scenario, great when there are few scenarios and many tests, like
- Method 2: Group by custom category, create describe, put tests
- The result: organized report 🖼, can run only one category 🆒
- BP: Categorize your tests ✅
- Tagging: sometime we want to run custom
- Linter: ⚙️

### The test structure

- Problem: Long text, why does it fail?
- Don't have that look 🖼
- Principle: Some fixed structure will ease for our brain (pattern)
- The result: organized report 🖼, can run only one category 🆒
- BP: Categorize your tests ✅
- My test snippet ⚙️

## Test setup patterns

## Test assertion patterns
