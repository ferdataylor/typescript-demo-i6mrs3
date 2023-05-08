// Import stylesheets
import './style.css';
import { Observable, Observer } from 'rxjs';

// Write TypeScript code!
let numbers = [1, 5, 10];
let source = Observable.from(numbers);

source.subscribe(
  (value) => console.log(`value: ${value}`),
  (error) => console.log(`error: ${error}`),
  () => console.log(`completed`)
);

const cars: string[] = ['Volvo', 'Jeep', 'Volvo', 'Lincoln', 'Lincoln', 'Ford'];
const uniqueCars: string[] = Array.from(new Set(cars));
console.log(uniqueCars);
console.log('type of uniqueCars = ' + typeof uniqueCars);
console.log('type of cars = ' + typeof cars);
