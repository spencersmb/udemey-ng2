
import {Injectable} from "angular2/core";

@Injectable()
export class CalcService{

    constructor(){

    }
    add(num1, num2):number {
        return num1 + num2;
    }
    multiply(num1, num2):number {
        return num1 * num2;
    }

}