const { expect } = require('chai')
const supertest = require('supertest')

global.expect = expect
global.supertest = supertest



// // //If you are using ESLint, we recommend 
// adding the following data to your .eslintrc.js 
// file to ensure the linter doesn't complain when 
// you use the expect and supertest libraries globally 
// in your test files:

// // "globals": {
// //     "supertest": true,
// //     "expect": true
// //   }