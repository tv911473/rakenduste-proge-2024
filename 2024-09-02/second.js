// luua array numbritega ja leida kindla numbri index
const array = [1,2,3,4,5];

function findIndex(array, num) {
    return array.indexOf(num)
};

console.log(findIndex(array, 3));

// liida 2 numbrit
function addNumbersFn(num1, num2) {
    return num1 + num2
};

console.log(addNumbersFn(1, 2));

// ymber kirjutada arrow funktsioonina
const addNumbersArrowFn = (num1, num2) => {
    return num1 + num2
};

console.log(addNumbersArrowFn(2, 2));

// ymber kirjutada shorthand arrow funktsioonina
const addNumbersArrowFnShort = (num1, num2) => num1 + num2;


// ylesanne
function addNumbersNested(num1) {
    return function(num2) {
        return num1 + num2
    };
}
console.log(addNumbersNested(3)(4));

// eelmine func -> arrow func
const addNumbersNestedArrowFn = (num1) => (num2) => num1 + num2