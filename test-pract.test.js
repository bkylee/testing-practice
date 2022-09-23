import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher
} from './test-pract.js';
const str = 'abcce';
const x = 10;
const y = 2;

test ('capitalize first letter', () =>{
    expect(capitalize(str)).toMatch(str.charAt(0).toUpperCase() + str.slice(1));
});

test ('string is reversed', ()=>{
    let newStr = "";
    for(let i = str.length; i >= 0; i--){
        newStr = newStr.concat(str.charAt(i));
    };
    expect(reverseString(str)).toMatch(newStr);
});

test ('calc addition',()=>{
    expect(calculator.add(x,y)).toBe(x + y);
});
test ('calc subtraction',()=>{
    expect(calculator.subtract(x,y)).toBe(x - y);
});
test ('calc multiplication',()=>{
    expect(calculator.multiply(x,y)).toBe(x * y);
});
test ('calc division',()=>{
    expect(calculator.divide(x,y)).toBe(x / y);
});

test ('casear cypher alphabet',()=>{
  expect(caesarCipher(str)).toMatch('bcddf');  
});

// test ('caesar cypher punctuation',()=>{
//     for(let i = 0; i < str.length; i ++){
//         expect(caesarCipher(str).charCodeAt(i)).toMatch((str.charCodeAt(i))+1)};
//     if (str.charCodeAt(i) == 122){
//             expect(caesarCipher(str).charCodeAt(i)).toMatch(97)
//     }
//     if (str.charCodeAt(i) == 90){
//         expect(caesarCipher(str).charCodeAt(i)).toMatch(65);
//     };
// });
