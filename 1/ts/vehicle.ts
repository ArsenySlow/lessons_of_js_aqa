import {VehicleInterfaces} from "./interfaces/vehicle.interfaces";

export class Vehicle implements VehicleInterfaces{

    wheels:number;
    color:string;

    constructor(w:number,c:string) {
        this.wheels = w;
        this.color = c;
    }

    beep(countBeep?:number) {
        for (let i = 0; i < countBeep; i++) {
            console.log('BEEEEEEEEEEEEEEEEEP!');
        }
    }
}