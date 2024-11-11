"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Train = void 0;
var vehicle_1 = require("./vehicle");
var Train = /** @class */ (function (_super) {
    __extends(Train, _super);
    function Train() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Train.prototype.beep = function (countBeep) {
        for (var i = 0; i < countBeep; i++) {
            console.log('TYYYYYYYYYYYYYYYYYY!');
        }
    };
    return Train;
}(vehicle_1.Vehicle));
exports.Train = Train;
