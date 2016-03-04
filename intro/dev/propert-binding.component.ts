import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
    selector: 'property-binding',
    template:`
        <h2>Property Binding Child Component</h2>
        <p>Data bind from parent component: </p>
        <!-- name must match selector of input on this component -->
        <p>{{myName}} is {{age}} years old</p>

        <h4>MY Hobbies are:</h4>
        <input #hobbies type="text" (keyup)="onHobbiesChanged(hobbies.value)">
    `
})

export class PropertyBindingComponent{

    //Alias binding
    @Input('myAge') age: string;

    @Input() myName;

    //output
    @Output() hobbiesChanged = new EventEmitter<string>();

    constructor(){
    }
    onHobbiesChanged(hobbies: string): void{
        //emit passed in value to function
        this.hobbiesChanged.emit(hobbies);
    }
}