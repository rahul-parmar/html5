var Calculator = {
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
};
Calculator.add(30);
Calculator.multiply(4);
console.log(Calculator.getTotal());
var Calculator1 = Object.create(Calculator);
Calculator1.add(50);
Calculator1.multiply(3);
console.log(Calculator1.getTotal());