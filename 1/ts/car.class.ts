import {Vehicle} from "./vehicle";

export class CarClass extends Vehicle{

    beep(countBeep) {
        for (let i = 0; i < countBeep; i++) {
            console.log('BEEEEEEEEEEEEEEEEEP!');
        }
    }
}

const car = new CarClass(3,'Blue');
const car2 = new CarClass(4,'Red');

car.beep(2)
//sadasdasd
const car2Color = car2.color
console.log(car2Color)