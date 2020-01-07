# Lesson scripts - Component tests

## Part 1 - the 1st priority tests

**Punch**: Similar to req doc with TODO

- I have a requirements doc
- Start watch
- TODOs test
- Punch: TDD or not - start with these

## Part 2 - Introduce the API

**Punch**: Realistic

- Show unit under test (API)
- Show setup, discus this later, it's important

## Part 3 - basic test

**Punch**: Wait...

- Test skeleton with good structure
- AAA
- Assert 400
- Supertest, in process
- Simplistic 200 assertion and then body + inline snapshots
- Save to DB fail, let's fix

# Part 4 - Good coverage

**Punch**: High-coverage

- The basics are tested, let's do advanced
- The downside of black-box testing - no coverage
- Error handler is not covered - It's not only about the number
- This is only an example - can be critical module
- We have 2 challenges now: simulate & check
- Arrange, mock things (nock, sinon, env var)
- Show better coverage number

## Part 5 - Strength & Performance

**Punch**: 200 tests in 4.3

- We've seen coverage
- Realistic - catch DB bug
- What about performance?
- Run unit tests = 1 second
  npm test -- unit-test-for-performance. --maxWorkers=4
- Run component test
  npm test -- blank. --maxWorkers==1
- State: 1.5 seconds difference is nothing, when contextual it's less, more unit test.
- Speed is not a concern
- Show graphs
- Other pros: any framework, great to start - show book, easier to test because API is accessible, less refactoring,
- Prominent Microservice technique
- However, setup is important - could be much worst

## Part 6 - Setup

**Punch**: No IO...

- How slow it can be - pay attention
- When - depends on runner, two events: globalSetup, beforeAll
- Global setup: we rely on a docker-compose, in-mem, huge win
- Global setup - open DB: avoid the always instantiate mistake 
- Global setup
- Per suite setup
- 

## What's missing

- MQ
- Swagger verify

## Commands

brew services start postgresql
