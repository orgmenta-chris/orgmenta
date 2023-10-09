import _ from "underscore";

// Union

export const doArrayUnion = (arrayOfArrays: any) => {
  // return a merged array with only unique values.
  const result = _.union(...arrayOfArrays);
  return result;
};

// NONEMPTY
export const isArrayNonempty = (arr: any): boolean => {
  // return if it is an array and the array is not empty
  return Array.isArray(arr) && arr.length > 0;
};