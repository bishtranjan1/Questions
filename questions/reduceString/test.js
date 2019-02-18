const reduceString = require('./index');

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});

test('reduceString is a function', () => {
  expect(typeof reduceString).toEqual('function');
});

test('reduce string with input 1', () => {
  const str = "aaabbdcccccf";
  const expect="a3b2d1c5f1"
  const reduced = reduceString(str);
  expect(reduced).toEqual(expect);
});
test('reduce string with input 2', () => {
  const str = "hhhhhqqlllllllhhhppp";
  const expect="h5q2l7h3p3"
  const reduced = reduceString(str);
  expect(reduced).toEqual(expect);
});
test('reduce string with input 3', () => {
  const str = "hhhhhqqlllllllhhh";
  const expect="h5q2l7h3"
  const reduced = reduceString(str);
  expect(reduced).toEqual(expect);
});



