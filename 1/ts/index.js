"use strict";
//node .\index.ts для запуска тайпскпипт файла
//tsc index.ts для компиляции ts файла в js
Object.defineProperty(exports, "__esModule", { value: true });
var airplane_1 = require("./airplane");
var Train_1 = require("./Train");
var car_class_1 = require("./car.class");
var vehicle_1 = require("./vehicle");
var firstPerson = {
    name: "Ola",
    age: 15
};
var myNumber = 3;
var myNumber2 = 'rty';
var one = 1;
var two = 2;
var summ = one + two; // + - / * %
var summ2 = '';
console.log('Значение =', summ);
console.log(myNumber);
console.log(myNumber2);
console.log(typeof myNumber);
console.log(typeof myNumber2);
console.log(typeof summ);
var MyAirplane = new airplane_1.Airplane(2, 'Black');
console.log('MyAirplane', MyAirplane);
var MyCar = new car_class_1.CarClass(4, 'Blue').beep(6);
console.log('MyCar', MyCar);
var MyTrain = new Train_1.Train(44, 'Red');
console.log('MyTrain', MyTrain);
var Carry = new vehicle_1.Vehicle(4, 'Blasd').beep(26);
console.log('Carry', Carry);
