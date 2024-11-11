"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle(w, c) {
        this.wheels = w;
        this.color = c;
    }
    Vehicle.prototype.beep = function (countBeep) {
        for (var i = 0; i < countBeep; i++) {
            console.log('BEEEEEEEEEEEEEEEEEP!');
        }
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
