import assert from 'assert';
import  Utils  from '../src/utils';
import {describe} from "mocha";

let utils = new Utils();

describe('Array', () => {
	describe('drop should create a slice of array with n elements dropped from the beginning.',  () => {
		it('with no amount to drop argument', () => {
			assert.deepEqual([1, 2, 3], utils.drop([0, 1, 2, 3]));
		});
		it('width amount argument', () => {
			assert.deepEqual([3, 4, 5, 6], utils.drop([0, 1, 2, 3, 4, 5, 6], 3));
		});
		it('width amount argument that is too high', () => {
			assert.deepEqual([], utils.drop([0, 1, 2], 4));
		});
	});

	describe('Chunk should create an array of elements split into groups the length of size. If array cant be split evenly, the final chunk will be the remaining elements.',  () => {
		it('with no size argument', () => {
			assert.deepEqual([[1, 2], [3, 4]] , utils.chunk([1, 2, 3, 4]));
		});
		it('with size argument', () => {
			assert.deepEqual([[1, 2], [3, 4], [5, 6]] , utils.chunk([1, 2, 3, 4, 5, 6], 2));
		});
		it('with uneaven array', () => {
			assert.deepEqual([[1, 2], [3]] , utils.chunk([1, 2, 3], 2));
		});
		it('with negative size', () => {
			assert.deepEqual([1, 2, 3] , utils.chunk([1, 2, 3], -2));
		});
		it('size bigger than array length', () => {
			assert.deepEqual([1, 2, 3] , utils.chunk([1, 2, 3], 10));
		});
	});

	describe('Compact should create an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.',  () => {
		it('All negatives removed', () => {
			assert.deepEqual([1, 2, 3], utils.compact([0, 1, false, 2, '', 3]));
		});
	});

	describe('Concat should a new array concatenating array with any additional arrays and/or values.',  () => {
		it('with regular numbers', () => {
			assert.deepEqual([1, 2, 3], utils.concat([1], 2, 3));
		});
		it('with arrays', () => {
			assert.deepEqual([1, 2, 3], utils.concat([1], [2], [3]));
		});
		it('with deep arrays', () => {
			assert.deepEqual([1, 2, [3]], utils.concat([1], [2], [[3]]));
		});
	});
});