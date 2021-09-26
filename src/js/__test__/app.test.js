import ArrayBufferConverter from '../app';
import getBuffer from '../getBufferConverter';

test('cast-to-string', () => {
  const checkedObject = new ArrayBufferConverter();
  checkedObject.load(getBuffer());
  expect(checkedObject.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
