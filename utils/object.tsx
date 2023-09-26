import _ from 'underscore';


// Validate (object helper functions)
export const validateObjectIsobject = <T extends any>(value: T): boolean => {
    // return true if value is an object (note this INCLUDES arrays and functions)
    return typeof value === 'object' && !Array.isArray(value);
};
  
export const validateObjectIsliteral = (value: any): boolean => {
    // return true if value is an object (note this FILTERS OUT arrays and functions)
    return _.isObject(value) && !_.isArray(value) && !_.isFunction(value);
}

export const validateObjectHaskeys = (value: any): boolean => {
    // return true if object has at least one property (not necessary with values in them)
    return _.isObject(value) && _.keys(value).length > 0;
}

export const validateObjectHasvalues = (value: any): boolean => {
    // return true if object has at least property with a value in it.
    return _.isObject(value) && _.some(value, (v: any) => v !== undefined && v !== null);
    
    // Expected behaviour:
    // const a = {test: 'example'} // returns TRUE
    // const a = {test: null} // returns false
    // const b = {test: undefined} // returns false
    // const c = 'string' // returns false
    // const d = 1 // returns false
    // const e = undefined // returns false
    // const f = null // returns false
    // const g = {test: {}} // returns TRUE
}
