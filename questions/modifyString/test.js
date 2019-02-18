const modifyString = require('./index');

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});

test('modifyStrings is a function', () => {
  expect(typeof modifyString).toEqual('function');
});

test('modfy string with input 1', () => {
  const str = "Let's have some fun";
  const exp="L37'5 h4v3 50m3 fun";
  const modified = modifyString(str);
  expect(modified).toEqual(exp);
});
test('modfy string with input 2', () => {
  const str = "C is for cookie, that's good enough for me";
  const exp="C 15 f0r c00k13, 7h47'5 g00d 3n0ugh f0r m3";
  const modified = modifyString(str);
  expect(modified).toEqual(exp);
});
test('modfy string with input 3', () => {
  const str = "By the power of Grayskull!";
  const exp="By 7h3 p0w3r 0f Gr4y5kull!";
  const modified = modifyString(str);
  expect(modified).toEqual(exp);
});


