import {Component, Directive, Renderer} from "angular2/core";
import {ElementRef} from "angular2/core";
import {UnlessDirective} from "./unless.directive";

@Component({
    selector: 'structure-directive',
    directives: [UnlessDirective],
    template: `
    <section class="examples top">
        <div layout="column" class="md-inline-form">
            <md-toolbar class="demo-toolbar md-primary">
                <div class="md-toolbar-tools">
                  <h3>Structural Directives</h3>
                  <span flex=""></span>
                </div>
            </md-toolbar>
            <md-content layout-padding>
                <div class="section1">
                    <br>
                      <div class="directive">
                        <h3>Custom Directive *ngUnless</h3>
                        <div>
                            Enter true or false
                            <br>
                            <input type="text" #condition (keyup)="0">
                        </div>
                        <br>
                        <div *ngUnless="condition.value != 'false'">
                            <div>This is my template - show only if false.</div>
                        </div>
                      </div>

                      <div class="directive">
                        <h3>*ngIf</h3>
                        <div>
                            Enter a number greater than 10
                            <br>
                            <input type="text" #number (keyup)="0">
                        </div>
                        <br>
                        <div *ngIf="number.value > 10">
                            Number is greater than 10
                        </div>
                      </div>
                      <div class="directive">
                        <h3>*ngFor</h3>
                        <div>
                            <ul>
                                <li *ngFor="#item of myList, #i = index">{{item}}, {{i}}</li>
                            </ul>
                        </div>
                      </div>
                      <div class="directive">
                        <h3>[ngSwitch]</h3>
                        <div>
                            Enter red, blue, or green
                            <input type="text" #color (keyup)="0">
                        </div>
                        <br>
                        <div [ngSwitch]="color.value">
                            <template [ngSwitchWhen]="'red'">
                                <span class="red">Color is red</span>
                            </template>
                            <template [ngSwitchWhen]="'blue'">
                                <span class="blue">Color is blue</span>
                            </template>
                            <template [ngSwitchWhen]="'green'">
                                <span class="green">Color is green</span>
                            </template>
                            <template ngSwitchDefault>
                                <span>Default</span>
                            </template>
                        </div>
                      </div>
                </div>
            </md-content>
        </div>
    </section>
    `
})

export class StructureDirective{

    myList: string[];

    constructor(){

        this.myList = [
            'Apple',
            'Milk',
            'Eggs',
            'Ham',
            'Cheese'
        ];

    }
}