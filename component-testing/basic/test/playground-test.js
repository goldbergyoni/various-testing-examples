beforeEach(() => {
  console.log('before');
});

afterEach(() => {
  console.log('after');
});

test('Will fail, I know it...', () => {
  expect(true).toBe(true);
});
