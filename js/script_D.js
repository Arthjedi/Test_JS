const arr = ['a', 'b', 'c'];

arr[10] = '3456';

console.log(arr);

const arrObj = {
    0: 'a',
    1: 'b',
    2: 'c',
    abc:{
        df: [1, 2, 3]
        def: {

        }
    }
};
const b='b';

// arrObj.b = '1234';
arrObj['b'] = '1234';

console.log(arrObj['b']);
console.log(arrObj.b);

arr[10] = '3456';

console.log(arr[10]);

// const obj = { a: 1, b: 2 };
const obj = {
    Anna: 500,
    Alice: 800,
};

console.log(obj.Anna);