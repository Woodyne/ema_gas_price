"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmaCalc = /** @class */ (function () {
    function EmaCalc() {
        this.reducer = function (prev, cur) { return prev + cur; };
        this.lastEma = 0;
        this.firstPrices = [];
    }
    EmaCalc.prototype.calc = function (price) {
        if (this.firstPrices.length < 5) {
            this.firstPrices.push(price);
            this.lastEma = this.firstPrices.reduce(this.reducer) / this.firstPrices.length;
        }
        this.lastEma = 0.4 * price + (1 - 0.4) * this.lastEma;
        return this.lastEma;
    };
    return EmaCalc;
}());
exports.default = EmaCalc;
