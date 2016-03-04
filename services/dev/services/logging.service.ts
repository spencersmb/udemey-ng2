
import {Injectable} from "angular2/core";

@Injectable()
export class LoggingService{

    constructor(){

    }
    log(message:string){
        console.log(message);
    }
}