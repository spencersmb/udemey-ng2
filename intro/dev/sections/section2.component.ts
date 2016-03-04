import {Component} from "angular2/core";

function debounce(fn, delay) {
    var timer = null;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
}

@Component({
    selector: 'section-two',
    template: `
     <p>Hi, my name is <span [class.is-awesome]="nameCheck" >{{name}}</span>.</p>
     <p>This is my first <span [style.color]="nameCheck === true ? 'red' : ''">angular 2 app</span>!</p>
     <p [ngClass]="{'is-awesome' : nameCheck}">NGClass expression example</p>
     <!-- # allows us to create a 1 way bind to the element in the dome -->
     <input type="text" [value]="placeholder" #inputElement (keyup)="convert(inputElement.value)">
     <br>
     <p>Two way data binding to input: {{inputElement.value}} </p>
     <!-- brackets put somethign in, parenthaeses pushing data out -->
     <button [disabled]="!nameCheck"> Button </button>
    `,
    styleUrls: ['src/css/section.css']
})

export class SectionTwo{
    name: string;
    nameCheck: boolean;
    placeholder: string;

    constructor(){
        this.name = 'Spencer';
        this.nameCheck = false;
        this.placeholder = 'placeholder';
    }
    convert(elem: string): boolean{
        this.nameCheck = elem.toLocaleLowerCase() === 'yes';
        return this.nameCheck;
    }
    checkVariable(): void{
    }
    debounce(fn, delay) {
        var timer = null;
        return function () {
            var context = this, args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn.apply(context, args);
            }, delay);
        };
    }
}