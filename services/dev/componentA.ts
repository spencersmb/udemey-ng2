import {Component} from "angular2/core";
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {LoggingService} from "./services/logging.service";
import {CalcService} from "./services/calc.service";


@Component({
    selector: 'my-component-A',
    directives: [MATERIAL_DIRECTIVES],
    template:`
    <section class="examples">
        <div layout="column" class="md-inline-form">
            <md-toolbar class="demo-toolbar md-primary">
                <div class="md-toolbar-tools">
                  <h3>Logging Service</h3>
                  <span flex=""></span>
                </div>
            </md-toolbar>
            <md-content layout-padding>
                <div class="section1">
                    <div layout-gt-sm="row">
                        <md-input-container class="md-block" flex-gt-sm>
                            <label>Message</label>
                            <input md-input #message type="text">
                        </md-input-container>
                    </div>
                    <button  md-raised-button class="md-raised md-primary" (click)="onLog(message.value)">Send</button>
                </div>
                <hr>
                <h3>Calculator Service</h3>
                <p>Add or multiply these two numbers:</p>
                <div layout-gt-sm="row">
                        <md-input-container class="md-block" flex-gt-sm>
                            <label>First Number</label>
                            <input md-input #num1 type="text">
                        </md-input-container>
                        <div class="factor"> X or + </div>
                        <md-input-container class="md-block" flex-gt-sm>
                            <label>Second Number</label>
                            <input md-input #num2 type="text">
                        </md-input-container>
                </div>

                <button  md-raised-button class="md-raised md-primary" (click)="onMultiply(num1.value, num2.value)">Multiply</button>
                <button  md-raised-button class="md-raised md-primary" (click)="onAdd(num1.value, num2.value)">Add</button>
                <br>
                <p>Result: {{result}}</p>
            </md-content>
        </div>
    </section>
    `
})

export class ComponentA{
    result: number;
    constructor(
        private _loggingService: LoggingService,
        private _calcService: CalcService
    ){
        this.result = 0;
    }
    onLog(message:string):void{
        this._loggingService.log(message);
    }
    onMultiply(num1: number, num2:number):void{
        //adding '' at begining converts to string
        //adding + at begining converts to number
        this.result = this._calcService.multiply(+num1, +num2);
    }
    onAdd(num1: number, num2:number):void{
        this.result = this._calcService.add(+num1, +num2);
    }
}