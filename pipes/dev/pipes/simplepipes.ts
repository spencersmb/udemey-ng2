import {Component} from "angular2/core";
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {ReversePipe} from "./reverse.pipe";

@Component({
    selector: 'simple-pipes',
    templateUrl:'dev/view/simple-pipes.html',
    directives:[MATERIAL_DIRECTIVES],
    pipes:[ReversePipe]
})

export class SimplePipes{

    today: any;
    constructor(){
        this.today = new Date();
    }
}