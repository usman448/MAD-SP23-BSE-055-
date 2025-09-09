// 1 Function: add()
function add(a, b) {
    if (a === undefined) a = 0;  
    if (b === undefined) b = 0;
    return a + b;
}

// 2 Function: subtract()
function subtract(a = 0, b = 0) {
    return a - b;
}

// 3 Function: multiply()
function multiply(...nums) {
    return nums.reduce((result, n) => result * n, 1);
}

// 4 Function: divide()
function divide() {
    if (arguments.length === 0) return "No numbers provided!";
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        result /= arguments[i];
    }
    return result;
}

//  Testing
console.log("Add:", add(5));             // 5 (second arg undefined → 0)
console.log("Subtract:", subtract(10));  // 10 (b default = 0)
console.log("Multiply:", multiply(2, 3, 4)); // 24
console.log("Divide:", divide(100, 2, 5));   


//LAB TASK 2 
function SolveThis(obj) {
    let res = {}; // result object

    for (let key in obj) {
        let value = obj[key]; // array ya single value
        switch (key) {
            case "sum":
                res[key] = value.reduce((a, b) => a + b, 0);
                break;
            case "max":
                res[key] = Math.max(...value);
                break;
            case "min":
                res[key] = Math.min(...value);
                break;
            case "round":
                res[key] = Math.round(value); // single number
                break;
            case "abs":
                res[key] = Math.abs(value);
                break;
            case "ceil":
                res[key] = Math.ceil(value);
                break;
            case "floor":
                res[key] = Math.floor(value);
                break;
            case "random":
                res[key] = Math.random(); // random number 0-1
                break;
            default:
                res[key] = "Operation not supported";
        }
    }

    return res;
}

//  Example Test
console.log(SolveThis({
    sum: [3, 2, 4],
    max: [2, 4, 3, 5],
    min: [5, 3, 4, 3],
    round: 4.7,
    abs: -12,
    ceil: 3.2,
    floor: 6.9,
    random: []
}));
