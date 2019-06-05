//管道运算符

const pipeline = (...funcs)=>
    val => funcs.reduce((a,b) =>b(a),val);

//const pipeline = (...funcs) => val =>console.log(val);  //5

const pipeline = (...funcs) => console.log(e);
const plus1 = a => a+1;
const mult2 = a => a*2;
const addTheMult = pipeline(plus1,mult2);
addTheMult(5)
//console.log(addTheMult(5)); //12




//编译后的文件
/* "use strict";

var pipeline = function pipeline() {
    for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
        funcs[_key] = arguments[_key];
    }

    return function (val) {
        return funcs.reduce(function (a, b) {
            return b(a);
        }, val);
    };
};

//const pipeline = (...funcs) => val =>console.log(val);  //5

//const pipeline = (...funcs) => console.log(e);
var plus1 = function plus1(a) {
    return a + 1;
};
var mult2 = function mult2(a) {
    return a * 2;
};
var addTheMult = pipeline(plus1, mult2);
addTheMult(5);
console.log(addTheMult(5));
*/
