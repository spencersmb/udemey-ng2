import {Component, EventEmitter, Output, Input} from "angular2/core";
import {DataModel} from "../model/data-model";
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {FORM_DIRECTIVES, Validators} from 'angular2/common';
import {DataModel} from "../model/data-model";



@Component({
    selector: 'my-input',
    directives: [MATERIAL_DIRECTIVES, FORM_DIRECTIVES],
    template:`
    <div layout="column" class="md-inline-form">
        <md-toolbar class="demo-toolbar md-primary">
            <div class="md-toolbar-tools">
              <h3>Enter your information, please.</h3>
              <span flex=""></span>
            </div>
        </md-toolbar>
        <md-content layout-padding>
            <div class="section1">
              <form name="userForm">
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
              <p>
                Filled out: {{isFilled ? 'Yes' : 'No'}}
                <br>
                Valid: {{isValid ? 'Yes' : 'No'}}
                </p>
                <button
                md-raised-button
                [disabled]="!isValid"
                class="md-raised md-primary"
                (click)="onSubmit()">Submit</button>
            </div>
        </md-content>
</div>
    `
})

export class InputComponent{

    mySelf: DataModel;
    isFilled: boolean;
    isValid: boolean;

    @Output() submitted = new EventEmitter<DataModel>();

    //input binds to the myself property
    @Input() mySelf;

    constructor(){
        this.mySelf = {
            name: '',
            age: ''
        };
        this.isFilled = false;
        this.isValid = false;

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
    onSubmit(): void{
        //onSubmit output the myself object
        this.submitted.emit(this.mySelf);
    }

}