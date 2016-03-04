import {Component} from "angular2/core";
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {FormBuilder} from "angular2/common";
import {Validators} from "angular2/common";
import {ControlGroup, Control} from "angular2/common";
import {ValidationService} from "./validation.service";

@Component({
    selector: 'data-template-form',
    directives:[MATERIAL_DIRECTIVES],
    template:`
    <section class="examples top">
    <div layout="column" class="md-inline-form">
        <md-toolbar class="demo-toolbar md-primary">
            <div class="md-toolbar-tools">
              <h3>Data Driven Template Example</h3>
              <span flex=""></span>
            </div>
        </md-toolbar>
        <md-content layout-padding>
            <div class="section1">
            <!-- manually override the template form using the myForm control group we created in the component -->
            <!-- we can still use the # to build a seperate refrence to the input -->
                  <form name="userForm" (ngSubmit)="onSubmit()" [ngFormModel]="myForm">
                        <div layout-gt-sm="column">
                            <h4>Sign-up form:</h4>
                                  <md-input-container class="md-block" flex-gt-sm>
                                        <label [ngClass]="checkValid(mail)">Mail</label>
                                        <!-- assign this input to the new form control is ngFormControl -->
                                        <input
                                        [ngClass]="checkValid(mail)"
                                        [ngFormControl]="myForm.controls['email']"
                                        #mail="ngForm"
                                        md-input
                                        type="email"
                                        >
                                  </md-input-container>
                                  <md-input-container class="md-block" flex-gt-sm>
                                        <label [ngClass]="checkValid(password)">Password</label>
                                        <input
                                        [ngClass]="checkValid(password)"
                                        [ngFormControl]="myForm.controls['password']"
                                        #password="ngForm"
                                        md-input
                                        type="text" >
                                  </md-input-container>
                                  <md-input-container class="md-block" flex-gt-sm>
                                        <label [ngClass]="checkPassword(confirmPassword.value)">Confirm Password</label>
                                        <input
                                        [ngClass]="checkPassword(confirmPassword.value)"
                                        [ngFormControl]="myForm.controls['confirmPassword']"
                                        #confirmPassword="ngForm"
                                        md-input
                                        (keyup)="getPassword(password.value)"
                                        type="text"
                                        >
                                  </md-input-container>
                        </div>
                        <button
                        [disabled]="!myForm.valid || password.value !== confirmPassword.value"
                        type="submit"
                        md-raised-button
                        class="md-accent md-hue-1"
                        >Submit</button>
                  </form>
            </div>
            <div class="">
                <h3>You Submitted:</h3>
                <p>email: {{submitted.email | json}}</p>
                <p>password: {{submitted.password | json}}</p>
                <p>confirmPassword: {{submitted.confirmPassword | json}}</p>
            </div>
        </md-content>
    </div>
    `
})


export class DataFormTemplate{
    myForm: ControlGroup;
    submitted: Object;
    public myPassword: string;

    constructor(private _formBuilder: FormBuilder){
        this.submitted = {
            email: '',
            password:'',
            confirmPassword:''
        };
    }
    onSubmit(){
        console.log(this.myForm);
        this.submitted = this.myForm.value;
    }
    ngOnInit(): void{

        this.myPassword = 'spencer';
        console.log(this.myPassword);
        //build a control group
        this.myForm = this._formBuilder.group({
            //default value + validation process
            'email': ['', Validators.compose([
                Validators.required,
                ValidationService.emailValidator
            ])],
            'password': ['', Validators.compose([
                Validators.required,
                hasNumbers
            ])],
            'confirmPassword': ['', Validators.compose([
                Validators.required,
            ])]
        });
    }
    getPassword(password:string){
        this.myPassword = password;
        return this.myPassword;
    }
    checkPassword(confirm:string){
        if(this.myPassword === confirm){
            return 'green';
        }else{
            return 'red';
        }
    }
    checkValid(object):string{
        var mail = object;
            if(!mail.valid){
                return 'red';
            }else{
                return 'green';
            }
    }
}

//Typed annotation takes an argument control, and returns an object {s:boolean}
function hasNumbers(control: Control): {[s:string]: boolean}{
    //build validation logic - only return something that fails
    //reg ex to check for any digits in input field
    if(!control.value.match('\\d+')){
        //custom error object
        return {noNumbers: true};
    }
}
function matchPassword(control: Control):{[s:string]: boolean}{
    //if(!control.value === this.myForm.password){
    //    return {noMatch: true}
    //}
    //console.log(control.value);
    return false;
}