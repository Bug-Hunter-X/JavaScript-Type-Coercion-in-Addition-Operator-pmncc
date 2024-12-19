# JavaScript Type Coercion in Addition Operator

This repository demonstrates a common, yet potentially confusing, behavior in JavaScript related to type coercion during addition.  Specifically, it highlights the differences in how the `+` operator handles `undefined`, `null`, and empty strings. This can lead to unexpected results if not properly accounted for.

The `bug.js` file contains the buggy code showcasing this behavior, and `bugSolution.js` provides a solution illustrating ways to mitigate the issue.

## Bug

The core issue lies in JavaScript's loose typing and its implicit type coercion.  When the `+` operator encounters `undefined`, it converts it to `NaN`. When used with `null`, `null` is converted to 0, and the empty string '' is converted to 0. This can lead to unexpected results, especially when dealing with numerical calculations where a specific data type is expected.

## Solution

The solution involves explicitly handling potential `undefined`, `null` or empty string values before performing the addition operation. This can involve using a combination of conditional checks and type conversions to ensure the operands are of the expected data type before calculation.  Alternatively, you can use a more robust addition function that explicitly handles these edge cases.
