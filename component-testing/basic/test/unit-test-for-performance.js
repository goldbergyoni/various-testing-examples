function simpleMethodUnderTest(a, b, c, d) {
  return (a + b) / (c * d);
}

test.each(new Array(100).fill(''))('When right side is 1, value equals to left side', () => {
  const receivedResult = simpleMethodUnderTest(100, 100, 1, 1);

  expect(receivedResult).toBe(100 + 100);
});
