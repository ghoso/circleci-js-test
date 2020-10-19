// double test
// 2020年10月19日修正
const double = require('./double');
test('double 2 to equal 4', () => {
  expect(double(2)).toBe(4);
});