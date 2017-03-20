var Calculator = function () {
    //this.total = 0;
}
Calculator.prototype = {
    total: 0
    , add: function (val) {
        this.total += val;
    }
    , multiply: function (val) {
        this.total *= val;
    }
    , getTotal: function () {
        return this.total;
    }
}
var ScientificCalculator = function () {}
ScientificCalculator.prototype = Object.create(Calculator.prototype);
var calc = new Calculator(); // Constructor invocation pattern
calc.add(30);
calc.multiply(4);
console.log(calc.getTotal());
var scientificCalc = new ScientificCalculator(); // Constructor invocation pattern
scientificCalc.add(50);
scientificCalc.multiply(4);
console.log(scientificCalc.getTotal());

ScientificCalculator.prototype.
sin = function (val) {
    return Math.sin(val);
}
console.log(scientificCalc.sin(100));