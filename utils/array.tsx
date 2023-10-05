import _ from "underscore";

// Union

export const doArrayUnion = (arrayOfArrays: any) => {
  // return a merged array with only unique values.
  const result = _.union(...arrayOfArrays);
  return result;
};
