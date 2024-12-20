# Unexpected NaN with undefined and null in addition

This example demonstrates a common pitfall in JavaScript related to loose typing and the handling of undefined and null values in arithmetic operations.  Adding undefined to a number will produce NaN, while adding null will result in a numerical 0. This behavior can be unexpected, and handling these edge cases is crucial for robust code.

The `bug.js` file contains the buggy code, and `bugSolution.js` provides a corrected version that demonstrates best practices for handling potential undefined/null values.  Always check for these values before performing calculations to avoid unpredictable outputs.