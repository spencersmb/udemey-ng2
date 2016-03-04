
import {Injectable} from "angular2/core";

@Injectable()
export class DataService{

    constructor(private _data = ['summer', 'winter', 'fall', 'spring']){

    }

}