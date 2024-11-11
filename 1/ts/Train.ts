import {Vehicle} from "./vehicle";

export class Train extends Vehicle{

    beep(countBeep) {
        for (let i = 0; i < countBeep; i++) {
            console.log('TYYYYYYYYYYYYYYYYYY!');
        }
    }
}