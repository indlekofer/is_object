import assert from 'assert';

import isObject from '../src/index';

describe('is_object', () => {
  it('array should be `false`', () => {
    assert.equal(false, isObject(['a', 'b', 'c', 'd', 'e']));
  });
  it('object should be `true`', () => {
    assert.equal(true, isObject({a:1, b:2, c:3}));
  });
  it('string should be `false`', () => {
    assert.equal(false, isObject('abcde'));
  });
  it('empty string should be `false`', () => {
    assert.equal(false, isObject(''));
  });
  it('null should be `false`', () => {
    assert.equal(false, isObject(null));
  });
  it('undefined should be `false`', () => {
    assert.equal(false, isObject(undefined));
  });
  it('false should be `false`', () => {
    assert.equal(false, isObject(false));
  });
  it('true should be `false`', () => {
    assert.equal(false, isObject(true));
  });
  it('123 should be `false`', () => {
    assert.equal(false, isObject(123));
  });
  it('function should be `false`', () => {
    assert.equal(false, isObject(() => {return {};}));
  });
  it('NaN should be `false`', () => {
    assert.equal(false, isObject(NaN));
  });
  it('new Number should be `true`', () => {
    assert.equal(true, isObject(new Number(20)));
  });
});
