import {Component} from 'angular2/core';
import {DataModel} from "./model/data-model";
import {InputComponent} from "./bindings/input.component";
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {confirmComponent} from "./bindings/confirmComponent";
import {ChangeDetectorRef} from "angular2/src/core/change_detection/change_detector_ref";

@Component({
    selector: 'my-app',
    template: `
    <section class="app-content" flex="" layout="column" layout-align="start center">
        <md-content class="examples" layout-padding="" md-scroll-y="">
            <!-- catch the submit event with the emitter -->
            <!-- when this catches an event it fires the function -->
            <my-input (submitted)="onSubmit($event)" [mySelf]="confirmedMyself"></my-input>

            <confirm (confirmed)="onConfirm($event)" [mySelf]="mySelf"></confirm>

        </md-content>
    </section>
    `,
    directives:[InputComponent, MATERIAL_DIRECTIVES, confirmComponent]
})

export class AppComponent {

    mySelf: DataModel;
    confirmedMyself: DataModel;

    constructor(private cdr: ChangeDetectorRef){
        this.mySelf = {
            name: '',
            age: ''
        };
        this.confirmedMyself = {
            name: '',
            age: ''
        }
    }

    //Using change detection until we have tested using proper form setup for passing data
    onSubmit(mySelf: DataModel): void{

        //this creates a new object so we don't just 2 way databind to the ref object passed from the first form.
        this.mySelf = {
            name: mySelf.name,
            age: mySelf.age
        };
        this.cdr.detectChanges();
    }
    onConfirm(mySelf: DataModel): void{

        this.confirmedMyself = {
            name: mySelf.name,
            age: mySelf.age
        };
        this.cdr.detectChanges();
    }
}
