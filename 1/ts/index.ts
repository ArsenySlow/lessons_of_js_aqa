//node .\index.ts для запуска тайпскпипт файла
//tsc index.ts для компиляции ts файла в js


import {Airplane} from "./airplane";
import {Train} from "./Train";
import {CarClass} from "./car.class";
import {Vehicle} from "./vehicle";

interface Users{
    name: string,
    age: number
}

const firstPerson : Users ={
    name:"Ola",
        age:15
}



const myNumber =3;

let myNumber2 = 'rty'
const one = 1 ;
const two = 2 ;
const summ = one + two; // + - / * %
const summ2 = '';
console.log ('Значение =',summ);
console.log(myNumber)
console.log(myNumber2)
console.log(typeof myNumber)
console.log(typeof myNumber2)
console.log(typeof summ)


const  MyAirplane = new Airplane(2,'Black')
console.log('MyAirplane', MyAirplane)
const  MyCar = new CarClass(4,'Blue').beep(6)
console.log('MyCar', MyCar)
const  MyTrain = new Train(44,'Red')
console.log('MyTrain', MyTrain)

const Carry=new Vehicle(4,'Blasd').beep(26)
console.log('Carry', Carry)

