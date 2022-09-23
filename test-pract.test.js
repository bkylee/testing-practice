import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher
} from ('./test-pract.js');

test ('capitalize first letter', () =>{
    expect(capitalize(str).toMatch(`${str.charAt(0).toUpperCase()}${str.slice(1)}`));
});

test ('string is reversed', ()=>{
    for(let a = str.length;a > 0; a --){
        for(let b = 0; b < newStr.length; b ++){
            expect(reverseString(str).charAt(a)).toMatch(str.charAt(b))
        };
    };
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
