import {Component} from "angular2/core";
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

@Component({
    selector: 'my-component-B',
    directives: [MATERIAL_DIRECTIVES],
    template:`
    <section class="examples top">
        <div layout="column" class="md-inline-form">
            <md-toolbar class="demo-toolbar md-primary">
                <div class="md-toolbar-tools">
                  <h3>Component B</h3>
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
            </md-content>
        </div>
    </section>
    `
})

export class ComponentB{

    constructor(){

    }
}