//1. Написать функцию которая принимает строку с пробелами и 
//возвращает без единого пробела
let str = "1111 435345 4355";

function trimmer() {
    let result = str.replaceAll(" ", "");
    return result;
}

let res = console.log(trimmer());

//2. Написать функцию которая вернет часть полученной
//строки(от полученного индекса до конца строки) в верхнем регистре

let str = "I learn javascript!";

let trim = () => {
    let result = str.slice(2).toUpperCase();
    return result;
};

let res = console.log(trim());

//3. Написать функцию которая получает строку и 
//возвращает новую строку с дефисами вместо пробелов

let str = "I learn javascript";

function trimer() {
    let a = str.replaceAll(" ", "-");
    return a;
}

let result = trimer();

console.log(result);