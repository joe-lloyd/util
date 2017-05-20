/**
 * @class Utils
 *
 * @description
 * Entry point for the Utility class
 *
 * @flow
 */
export default class Utils {

	/**
	 * @description
	 * Creates a slice of array with n elements dropped from the beginning.
	 *
	 * @param {Array} array - an array of elements
	 * @param {Number} numberToDrop - Number of elements that will be removed from the beginning of the array
	 * @return {Array} array with certain amount removed from the beginning.
	 */
	drop (array, numberToDrop = 1) {
		return array.reduce((accumulator, currentValue, currentIndex) => {
			if (currentIndex < numberToDrop) {
				return accumulator;
			}
			return accumulator.concat(currentValue);
		}, []);
	}

	/**
	 * @description
	 * Creates an array of elements split into groups the length of size.
	 * If array can't be split evenly, the final chunk will be the remaining elements.
	 *
	 * @param {Array} array - array to be split
	 * @param {Number} size - size of the arrays
	 */
	chunk (array, size = 2) {
		if (size <= 0 || size > array.length) {
			return array;
		}

		let quotient = Math.floor(array.length /  size);
		let remainder = array.length % size;
		let totalArrays = quotient + (remainder ? 1: 0);
		let newArray = [];

		for (let i = 0; i < totalArrays; i++) {
			let start = i * size;
			let end = i * size + size;
			let subArray = array.slice(start, end);
			newArray.push(subArray);
		}

		return newArray;
	}

	/**
	 * @description
	 * Creates an array with all false values removed.
	 * The values false, null, 0, "", undefined, and NaN are false.
	 *
	 * @param {Array} array - To be stripped of negative values
	 */
	compact (array) {
		return array.reduce((accumulator, currentValue) => {
			return currentValue ? accumulator.concat(currentValue) : accumulator;
		}, [])
	}

	/**
	 * @description
	 * Creates a new array concatenating array with any additional arrays and/or values.
	 *
	 * @param {Array} array - Array to concat
	 * @param {...*} itemsToConcat - Items to add to the array
	 */
	concat (array, ...itemsToConcat) {
		return [...array, ...itemsToConcat.map((element) => {
			return Array.isArray(element) ? element.pop() : element;
		})];
	}

}