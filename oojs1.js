var Calculator = function () {
    var total = 0;
    var add = function (val) {
        total += val;
    };
    var multiply = function (val) {
        total *= val;
    };
    var getTotal = function () {
        return total;
    };
    //Closures
    return {
        add: add
        , mult: multiply
        , sum: getTotal
    }
};
var calc = new Calculator(); // Constructor invocation pattern
calc.add(30);
calc.mult(4);
console.log(calc.sum());