import {Component, EventEmitter, Output, Input} from "angular2/core";
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {FORM_DIRECTIVES, Validators} from 'angular2/common';
import {DataModel} from "../model/data-model";

@Component({
    selector: 'confirm',
    directives:[MATERIAL_DIRECTIVES, FORM_DIRECTIVES],
    template:`
        <div layout="column" class="md-inline-form top">
                <md-toolbar class="demo-toolbar md-primary">
                    <div class="md-toolbar-tools no-height">
                      <span layout="column">
                      <h3>Submitted information</h3>
                      <p>Please confirm your name is: {{mySelf.name}} and your age is: {{mySelf.age}}</p>
                      </span>
                    </div>
                </md-toolbar>
                <md-content layout-padding>
                    <div class="section1">
                      <form name="submittedForm">
                        <div layout-gt-sm="row">
                          <md-input-container class="md-block" flex-gt-sm>
                            <label>Title</label>
                            <input md-input type="text" [(value)]="mySelf.name" (keyup)="onKeyup()">
                          </md-input-container>
                          <md-input-container class="md-block" flex-gt-sm>
                            <label>Age</label>
                            <input md-input type="text" [(value)]="mySelf.age" (keyup)="onKeyup()">
                        </md-input-container>
                        </div>
                      </form>
                        <button
                            md-raised-button
                            [disabled]="!isValid"
                            class="md-raised md-primary"
                            (click)="onConfirm()"
                            >Confirm</button>
                    </div>
                </md-content>
        </div>
    `
})

export class confirmComponent{

    mySelf: DataModel;
    confirmedMyself: DataModel;
    isFilled: boolean;
    isValid: boolean;

    @Output() confirmed = new EventEmitter<DataModel>();

    //input binds to the myself property
    @Input() mySelf;

    constructor(){
        this.mySelf = {
            name: '',
            age: ''
        };
        this.confirmedMyself = {
            name: '',
            age: ''
        }
    }
    onKeyup():void
    {
        //check if filled
        this.checkText();

        //validate
        this.validate();

    }
    checkText(): void{
        if( this.mySelf.name != '' && this.mySelf.name != ''){
            this.isFilled = true;
        }else{
            this.isFilled = false;
        }
    }
    validate():  void{
        if( this.mySelf.name != '' && /^\d+$/.test(this.mySelf.age)){
            this.isValid = true;
        }else{
            this.isValid = false;
        }
    }
    onConfirm(): void{
        //onSubmit output the myself object
        this.confirmed.emit(this.mySelf);
    }
}
