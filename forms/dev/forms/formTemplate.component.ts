import {Component} from "angular2/core";
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

@Component({
    selector: 'template-form',
    directives:[MATERIAL_DIRECTIVES],
    template:`
    <section class="examples">
    <div layout="column" class="md-inline-form">
        <md-toolbar class="demo-toolbar md-primary">
            <div class="md-toolbar-tools">
              <h3>Simple Template Example</h3>
              <span flex=""></span>
            </div>
        </md-toolbar>
        <md-content layout-padding>
            <div class="section1">
            <!-- add event to form element to submit full form with button type submit -->
                  <form name="userForm" (ngSubmit)="onSubmit(f)" #f="ngForm">
                  <!-- use #f to bind to ngForm: we get a reference to our form -->
                        <div layout-gt-sm="column">
                            <h4>Sign-up form:</h4>
                                  <md-input-container class="md-block" flex-gt-sm>
                                        <label>Mail</label>
                                        <!-- ngControl registers the input with the whole form -->
                                        <input
                                        [ngClass]="{red: !email.valid, green: email.valid}"
                                        required
                                        md-input
                                        type="email"
                                        ngControl="email"
                                        #email="ngForm">
                                  </md-input-container>
                                  <md-input-container class="md-block" flex-gt-sm>
                                        <label>Password</label>
                                        <input required md-input type="text" ngControl="password" #password="ngForm">
                                  </md-input-container>
                                  <md-input-container class="md-block" flex-gt-sm>
                                        <label>Confirm Password</label>
                                        <input required md-input type="text" ngControl="confirmPassword" #confirmPassword="ngForm">
                                  </md-input-container>
                        </div>
                        <button
                        [disabled]="!f.valid || password.value !== confirmPassword.value"
                        type="submit"
                        md-raised-button
                        class="md-accent md-hue-1"
                        >Submit</button>
                  </form>
            </div>
            <div class="">
                <h3>You Submitted:</h3>
                <p>{{submitted | json}}</p>
            </div>
        </md-content>
    </div>
    `
})

export class TemplateFormComponent{
    submitted: Object;

    constructor(){
        this.submitted = {
            email: '',
            password: ''
        }
    }
    onSubmit(form){
        this.submitted = {
            email: form.value.email,
            password: form.value.password
        }
    }
}