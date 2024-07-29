// Importing individual exports
import { add, PI } from './mathUtils';

// Importing the entire module
import * as MathUtils from './mathUtils';

// Importing a class
import { Calculator } from './mathUtils';

console.log(add(2, 3)); // Output: 5
console.log(PI); // Output: 3.14159

const calc = new Calculator();
console.log(calc.add(10, 5)); // Output: 15
console.log(calc.subtract(10, 5)); // Output: 5

console.log(MathUtils.add(7, 8)); // Output: 15
console.log(MathUtils.PI); // Output: 3.14159
