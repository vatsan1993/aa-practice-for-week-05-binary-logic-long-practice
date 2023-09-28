// const { or, and, calculateTruthTable } = require('../../utils/truthTableHelpers');

// Implement the imported helper functions from line 1
//    Read the export file for the explanation of how they work

// Example workflow for the problem directly below:
//    A    B     !A || (A && B)
//    -------------------
//    0    1      ?

//    1. !A -> 1
//    2. calculateTruthTable(0, and, 1) -> 0
//    3. calculateTruthTable(1, or, 0) -> 1
//    4. Answer: 1

/******************************************************************************/

// Update arguments to calculate and console.log returned value
let or = (A, B) => {
  if (A) return A;
  else return B;
};
let and = (A, B) => {
  if (A) return B;
  else return A;
};
let calculateTruthTable = (A, cb, B) => {
  console.log(cb(A, B));
};
calculateTruthTable(0, and, 1); // 0
calculateTruthTable(1, or, 0); // 1
