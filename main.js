/* jshint esversion: 6 */
import { curriedAdd } from './curriedAdd.js';
import { curriedDomain } from './curriedDomain.js';
import { originalFunction, modifyFunction } from './modifyFunction.js';
import { outerFunction } from './nestedFunctions.js';

//Check how import works
console.log('Spot for import check');
const addOne = curriedAdd(7);
const addTwo = addOne(2);
const final = addTwo(4);
console.log('Result:', final);
//
console.log(curriedDomain('https')('lms.ithillel')('ua'));
//
const myExpFunc = modifyFunction(originalFunction, 10);
console.log(myExpFunc(12));
//
console.log(outerFunction(2)(5)(10));