const capitalize = str =>{
    let cap = str.charAt(0);
    cap = cap.toUpperCase();
    cap = str.replace(str.charAt(0), cap);
    return cap;
}

const reverseString = str =>{
    let newStr = "";
    for(let i = str.length; i >= 0; i--){
        newStr = newStr.concat(str.charAt(i));
    };
    return newStr;
};

const calculator = {
    add : (x,y)=>{
        return x + y;
    },

    subtract : (x,y)=>{
        return x - y;
    },

    multiply : (x,y)=>{
        return x * y;
    },

    divide : (x,y)=>{
        return x / y; 
    }

};

const caesarCipher = str =>{
    let newStr = str.split(" ");
    for(let i = 0; i < str.length; i ++){
        newStr = newStr + String.fromCharCode((str.charCodeAt(i))+1);
    if (str.charCodeAt(i) == 122){
            newStr = newStr + String.fromCharCode(97);
    }
    if (str.charCodeAt(i) == 90){
        newStr = newStr + String.fromCharCode(65);
    }
};
return newStr;
};





export {
    capitalize,
    reverseString,
    calculator,
    caesarCipher
}