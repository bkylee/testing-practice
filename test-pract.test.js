import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher, 
    analyzeArray
} from './test-pract.js';
const str = 'abcce';
const x = 10;
const y = 2;

const arr = [1,2,3,4,0];

test ('capitalize first letter', () =>{
    expect(capitalize(str)).toMatch(str.charAt(0).toUpperCase() + str.slice(1));
});

test ('string is reversed', ()=>{
    let newStr = 'eccba';
    expect(reverseString(str)).toMatch(newStr);
});

test ('calc addition',()=>{
    expect(calculator.add(x,y)).toBe(12);
});
test ('calc subtraction',()=>{
    expect(calculator.subtract(x,y)).toBe(8);
});
test ('calc multiplication',()=>{
    expect(calculator.multiply(x,y)).toBe(20);
});
test ('calc division',()=>{
    expect(calculator.divide(x,y)).toBe(5);
});

test ('casear cypher alphabet',()=>{
  expect(caesarCipher(str)).toMatch('bcddf');  
});


test ('array length', ()=>{
    const value = {
        avg: 2,
        min: 0,
        max: 4,
        length: 5
    }
    expect(analyzeArray(arr)).toEqual(value);
});


