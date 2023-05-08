// Import stylesheets
import './style.css';
import { Observable, Observer } from 'rxjs';
import { cloneDeep, orderBy, uniq } from 'lodash';

// Write TypeScript code!
let numbers = [1, 5, 10];
let source = Observable.from(numbers);

source.subscribe(
  (value) => console.log(`value: ${value}`),
  (error) => console.log(`error: ${error}`),
  () => console.log(`completed`)
);

const cars = ['Volvo', 'Jeep', 'Volvo', 'Lincoln', 'Lincoln', 'Ford'];
const uniqueCars = Array.from(new Set(cars));
const lodashUniqCars = uniq(cars);
console.log(uniqueCars);
console.log(lodashUniqCars);
